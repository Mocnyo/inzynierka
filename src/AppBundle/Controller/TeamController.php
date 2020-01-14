<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Team;
use AppBundle\Form\TeamFilterType;
use AppBundle\Form\TeamType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Pagerfanta\Pagerfanta;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\View\TwitterBootstrap3View;

/**
 * Class TeamController
 * @package AppBundle\Controller
 */
class TeamController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $queryBuilder = $em->getRepository(Team::class)->createQueryBuilder('e');

        list($filterForm, $queryBuilder) = $this->filter($queryBuilder, $request);
        list($teams, $pagerHtml) = $this->paginator($queryBuilder, $request);
        
        $totalOfRecordsString = $this->getTotalOfRecordsString($queryBuilder, $request);

        return $this->render('@App/administration/team/index.html.twig', array(
            'teams' => $teams,
            'pagerHtml' => $pagerHtml,
            'filterForm' => $filterForm->createView(),
            'totalOfRecordsString' => $totalOfRecordsString,

        ));
    }

    /**
    * Create filter form and process filter request.
    *
    */
    protected function filter($queryBuilder, Request $request)
    {
        $session = $request->getSession();
        $filterForm = $this->createForm(TeamFilterType::class);

        // Reset filter
        if ($request->get('filter_action') == 'reset') {
            $session->remove('TeamsControllerFilter');
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
                $session->set('TeamsControllerFilter', $filterData);
            }
        } else {
            // Get filter from session
            if ($session->has('TeamsControllerFilter')) {
                $filterData = $session->get('TeamsControllerFilter');
                
                foreach ($filterData as $key => $filter) { //fix for entityFilterType that is loaded from session
                    if (is_object($filter)) {
                        $filterData[$key] = $queryBuilder->getEntityManager()->merge($filter);
                    }
                }
                
                $filterForm = $this->createForm('AppBundle\Form\TeamsFilterType', $filterData);
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
            return $me->generateUrl('team', $requestParams);
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
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function newAction(Request $request)
    {
    
        $team = new Team();
        $form   = $this->createForm(TeamType::class, $team);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($team);
            $em->flush();
            
            $editLink = $this->generateUrl('team_edit', array('id' => $team->getId()));
            $this->get('session')->getFlashBag()->add('success', "<a href='$editLink'>Pomyślnie utwożono nowy zespół.</a>" );
            
            $nextAction=  $request->get('submit') == 'save' ? 'team' : 'team_new';
            return $this->redirectToRoute($nextAction);
        }
        return $this->render('@App/administration/team/new.html.twig', array(
            'team' => $team,
            'form'   => $form->createView(),
        ));
    }

    /**
     * @param Team $team
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAction(Team $team)
    {
        $deleteForm = $this->createDeleteForm($team);
        return $this->render('@App/administration/team/show.html.twig', array(
            'team' => $team,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * @param Request $request
     * @param Team $team
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function editAction(Request $request, Team $team)
    {
        $deleteForm = $this->createDeleteForm($team);
        $editForm = $this->createForm(TeamType::class, $team);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($team);
            $em->flush();
            
            $this->get('session')->getFlashBag()->add('success', 'Edycja zakończona powodzeniem!');
            return $this->redirectToRoute('team_edit', array('id' => $team->getId()));
        }
        return $this->render('@App/administration/team/edit.html.twig', array(
            'team' => $team,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }
    
    

    /**
     * Deletes a Teams entity.
     *
     * @Route("/{id}", name="teams_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Team $team)
    {
    
        $form = $this->createDeleteForm($team);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($team);
            $em->flush();
            $this->get('session')->getFlashBag()->add('success', 'Zespół usunięty');
        } else {
            $this->get('session')->getFlashBag()->add('error', 'Problem z usunięciem zespołu');
        }
        
        return $this->redirectToRoute('team');
    }
    
    /**
     * Creates a form to delete a Teams entity.
     *
     * @param Teams $team The Teams entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Team $team)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('team_delete', array('id' => $team->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }

    /**
     * @param Teams $team
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function deleteByIdAction(Team $team){
        $em = $this->getDoctrine()->getManager();
        
        try {
            $em->remove($team);
            $em->flush();
            $this->get('session')->getFlashBag()->add('success', 'Zespół usunięty');
        } catch (\Exception $ex) {
            $this->get('session')->getFlashBag()->add('error', 'Problem z usunięciem zespołu');
        }

        return $this->redirect($this->generateUrl('team'));

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
                $repository = $em->getRepository(Team::class);

                foreach ($ids as $id) {
                    $team = $repository->find($id);
                    $em->remove($team);
                    $em->flush();
                }

                $this->get('session')->getFlashBag()->add('success', 'Zespół usunięty');

            } catch (\Exception $ex) {
                $this->get('session')->getFlashBag()->add('error', 'Problem z usunięciem zespołu');
            }
        }

        return $this->redirect($this->generateUrl('team'));
    }
}
