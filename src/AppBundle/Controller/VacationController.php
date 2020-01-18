<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use AppBundle\Entity\Vacation;
use AppBundle\Form\VacationFilterType;
use AppBundle\Form\VacationType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Pagerfanta\Pagerfanta;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\View\TwitterBootstrap3View;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class VacationController
 * @package AppBundle\Controller
 */
class VacationController extends Controller
{
    /**
     * @return Response
     */
    public function calendarAction(): Response
    {
        return $this->render('@App/user/vacation/index.html.twig');
    }

    /**
     * @param Request $request
     */
    public function userIndexAction(Request $request) {
        /** @var User $user */
        $user = $this->getUser();
        $vacations = $user->getVacation();
        $currentDate = new \DateTime();

        $usedVacation = $user->getVacationTime() - $user->getVacationAvailable();

        return $this->render('@App/user/vacation/myVacations.html.twig', [
            'user' => $user,
            'vacations' => $vacations,
            'currentDate' => $currentDate,
            'usedVacation' => $usedVacation
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $queryBuilder = $em->getRepository(Vacation::class)->createQueryBuilder('e');

        list($filterForm, $queryBuilder) = $this->filter($queryBuilder, $request);
        list($vacations, $pagerHtml) = $this->paginator($queryBuilder, $request);

        $totalOfRecordsString = $this->getTotalOfRecordsString($queryBuilder, $request);

        $currentDate = new \DateTime();

        return $this->render('@App/management/vacation/index.html.twig', array(
            'vacations' => $vacations,
            'currentDate' => $currentDate
        ));
    }

    /**
    * Create filter form and process filter request.
    *
    */
    protected function filter($queryBuilder, Request $request)
    {
        $session = $request->getSession();
        $filterForm = $this->createForm(VacationFilterType::class);

        // Reset filter
        if ($request->get('filter_action') == 'reset') {
            $session->remove('LeaveControllerFilter');
        }

        // Filter action
        if ($request->get('filter_action') == 'filter') {
            // Bind values from the request
            $filterForm->handleRequest($request);

            if ($filterForm->isValid()) {
                // Build the query from the given form object
                $this->get('lexik_form_filter.query_builder_updater')->addFilterConditions($filterForm, $queryBuilder);
                // Save filter to session
                $filterData = $filterForm->getData();
                $session->set('LeaveControllerFilter', $filterData);
            }
        } else {
            // Get filter from session
            if ($session->has('LeaveControllerFilter')) {
                $filterData = $session->get('LeaveControllerFilter');

                foreach ($filterData as $key => $filter) { //fix for entityFilterType that is loaded from session
                    if (is_object($filter)) {
                        $filterData[$key] = $queryBuilder->getEntityManager()->merge($filter);
                    }
                }

                $filterForm = $this->createForm(VacationFilterType::class, $filterData);
                $this->get('lexik_form_filter.query_builder_updater')->addFilterConditions($filterForm, $queryBuilder);
            }
        }

        return array($filterForm, $queryBuilder);
    }

    /**
    * Get results from paginator and get paginator view.
    *
    */
    protected function paginator($queryBuilder, Request $request)
    {
        //sorting
        $sortCol = $queryBuilder->getRootAlias().'.'.$request->get('pcg_sort_col', 'id');
        $queryBuilder->orderBy($sortCol, $request->get('pcg_sort_order', 'desc'));
        // Paginator
        $adapter = new DoctrineORMAdapter($queryBuilder);
        $pagerfanta = new Pagerfanta($adapter);
        $pagerfanta->setMaxPerPage($request->get('pcg_show' , 10));

        try {
            $pagerfanta->setCurrentPage($request->get('pcg_page', 1));
        } catch (\Pagerfanta\Exception\OutOfRangeCurrentPageException $ex) {
            $pagerfanta->setCurrentPage(1);
        }

        $entities = $pagerfanta->getCurrentPageResults();

        // Paginator - route generator
        $me = $this;
        $routeGenerator = function($page) use ($me, $request)
        {
            $requestParams = $request->query->all();
            $requestParams['pcg_page'] = $page;
            return $me->generateUrl('leave', $requestParams);
        };

        // Paginator - view
        $view = new TwitterBootstrap3View();
        $pagerHtml = $view->render($pagerfanta, $routeGenerator, array(
            'proximity' => 3,
            'prev_message' => 'previous',
            'next_message' => 'next',
        ));

        return array($entities, $pagerHtml);
    }

    /*
     * Calculates the total of records string
     */
    protected function getTotalOfRecordsString($queryBuilder, $request) {
        $totalOfRecords = $queryBuilder->select('COUNT(e.id)')->getQuery()->getSingleScalarResult();
        $show = $request->get('pcg_show', 10);
        $page = $request->get('pcg_page', 1);

        $startRecord = ($show * ($page - 1)) + 1;
        $endRecord = $show * $page;

        if ($endRecord > $totalOfRecords) {
            $endRecord = $totalOfRecords;
        }
        return "Showing $startRecord - $endRecord of $totalOfRecords Records.";
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function newAction(Request $request)
    {
        $vacation = new Vacation();
        $form   = $this->createForm(VacationType::class, $vacation, ['role' => $this->getUser()->getRoles()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $interval = date_diff($vacation->getBeginAt(),$vacation->getEndAt());
            $days = $interval->format('%d');
            /** @var User $user */
            $user = $vacation->getUser();
            $vacationAvailable = $user->getVacationAvailable() - (int)$days;
            $user->setVacationAvailable($vacationAvailable);

            $em = $this->getDoctrine()->getManager();
            $vacation->setUser($this->getUser());
            $em->persist($user);
            $em->persist($vacation);
            $em->flush();

            $editLink = $this->generateUrl('calendar_edit', array('id' => $vacation->getId()));
            $this->get('session')->getFlashBag()->add('success', "<a href='$editLink'>New leave was created successfully.</a>" );

            $nextAction=  $request->get('submit') == 'save' ? 'vacations' : 'vacations';
            return $this->redirectToRoute($nextAction);
        }
        return $this->render('@App/management/vacation/new.html.twig', array(
            'vacation' => $vacation,
            'form'   => $form->createView(),
        ));
    }


    /**
     * @param Request $request
     * @param Vacation $leave
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function editAction(Request $request, Vacation $vacation)
    {
        $beforeInterval = date_diff($vacation->getBeginAt(),$vacation->getEndAt());
        $beforeDays = $beforeInterval->format('%d');
        $editForm = $this->createForm(VacationType::class, $vacation, ['role' => $this->getUser()->getRoles()]);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $afterInterval = date_diff($vacation->getBeginAt(),$vacation->getEndAt());
            $afterDays = $afterInterval->format('%d');
            if ($beforeDays > $afterDays) {
                $days = $beforeDays - $afterDays;
            } else {
                $days = $afterDays - $beforeDays;
            }
            /** @var User $user */
            $user = $vacation->getUser();
            $vacationAvailable = $user->getVacationAvailable() - (int)$days;
            $user->setVacationAvailable($vacationAvailable);

            $em = $this->getDoctrine()->getManager();
            $em->persist($vacation);
            $em->persist($user);
            $em->flush();

            $this->get('session')->getFlashBag()->add('success', 'Edited Successfully!');
            return $this->redirectToRoute('calendar');
        }
        return $this->render('@App/management/vacation/edit.html.twig', array(
            'vacation' => $vacation,
            'edit_form' => $editForm->createView()
        ));
    }

    /**
     * @param Vacation $leave
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function deleteByIdAction(Vacation $vacation){
        $em = $this->getDoctrine()->getManager();

        $interval = date_diff($vacation->getBeginAt(),$vacation->getEndAt());
        $days = $interval->format('%d');
        /** @var User $user */
        $user = $vacation->getUser();
        $vacationAvailable = $user->getVacationAvailable() + (int)$days;
        $user->setVacationAvailable($vacationAvailable);

        try {
            $em->remove($vacation);
            $em->persist($user);
            $em->flush();
            $this->get('session')->getFlashBag()->add('success', 'The Leave was deleted successfully');
        } catch (\Exception $ex) {
            $this->get('session')->getFlashBag()->add('error', 'Problem with deletion of the Leave');
        }

        return $this->redirect($this->generateUrl('calendar'));

    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function bulkAction(Request $request)
    {
        $ids = $request->get("ids", array());
        $action = $request->get("bulk_action", "delete");

        if ($action == "delete") {
            try {
                $em = $this->getDoctrine()->getManager();
                $repository = $em->getRepository(Vacation::class);

                foreach ($ids as $id) {
                    $leave = $repository->find($id);
                    $em->remove($leave);
                    $em->flush();
                }

                $this->get('session')->getFlashBag()->add('success', 'leaves was deleted successfully!');

            } catch (\Exception $ex) {
                $this->get('session')->getFlashBag()->add('error', 'Problem with deletion of the leaves ');
            }
        }

        return $this->redirect($this->generateUrl('calendar'));
    }

    /**
     * @param Request $request
     * @param Vacation $vacation
     */
    public function acceptAction(Request $request, Vacation $vacation) {
        $vacation->setIsAccepted(1);
        $em = $this->getDoctrine()->getManager();
        $em->persist($vacation);
        $em->flush();

        return $this->redirect($this->generateUrl('calendar'));
    }
}
