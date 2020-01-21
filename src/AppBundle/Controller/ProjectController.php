<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Project;
use AppBundle\Entity\UserTeam;
use AppBundle\Enum\ProjectStatusEnum;
use AppBundle\Form\EmployeeType;
use AppBundle\Form\ProjectType;
use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ProjectController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        /**  @var User $user * */
        $user = $this->getUser();
        $projectRepository = $this->getDoctrine()->getRepository(Project::class);
        $projects = $projectRepository->getProjectByUser($user->getId());

        $tasks = $user->getTask();

        return $this->render('@App/user/project/index.html.twig', [
            'tasks' => $tasks,
            'projects' => $projects
        ]);
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexManagementAction(Request $request)
    {
        /**  @var User $user * */
        $user = $this->getUser();
        /** @var UserTeam $team */
        $team = $user->getTeam();
        $projectRepository = $this->getDoctrine()->getRepository(Project::class);
        $projects = $projectRepository->findBy(['team' => $team]);

        return $this->render('@App/management/project/index.html.twig', [
            'projects' => $projects
        ]);
    }

    /**
     * @param Project $project
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAction(Project $project)
    {
        return $this->render('@App/management/project/show.html.twig', array(
            'project' => $project,
        ));
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function newManagementAction(Request $request)
    {
        $project = new Project();
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);
        $project->setTime('00:00:00');

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $project->setOwner($this->getUser());
            $em->persist($project);
            $em->flush();

            $editLink = $this->generateUrl('management_projects', array('id' => $project->getId()));
            $this->get('session')->getFlashBag()->add('success', "<a href='$editLink'>New project was created successfully.</a>");

            $nextAction = $request->get('submit') == 'save' ? 'management_projects' : 'management_projects';
            return $this->redirectToRoute($nextAction);
        }
        return $this->render('@App/management/project/new.html.twig', array(
            'project' => $project,
            'form' => $form->createView(),
        ));
    }

    /**
     * @param Request $request
     * @param Project $project
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function editManagementAction(Request $request, Project $project)
    {
        $editForm = $this->createForm(ProjectType::class, $project);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($project);
            $em->flush();

            $this->get('session')->getFlashBag()->add('success', 'Edited Successfully!');
            return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
        }
        return $this->render('@App/management/project/edit.html.twig', array(
            'project' => $project,
            'edit_form' => $editForm->createView(),
        ));
    }

    /**
     * @param Request $request
     * @param Project $project
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function finishManagementAction(Request $request, Project $project)
    {
        $project->setStatus(ProjectStatusEnum::FINISHED);
        $em = $this->getDoctrine()->getManager();
        $em->persist($project);
        $em->flush();

        return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
    }

    /**
     * @param Request $request
     * @param Project $project
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function employeeListAction(Request $request, Project $project)
    {
        $form = $this->createForm(EmployeeType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($project);
            $em->flush();

            $this->get('session')->getFlashBag()->add('success', 'Edited Successfully!');
            return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
        }
        return $this->render('@App/management/project/employeeList.html.twig', array(
            'project' => $project,
            'form' => $form->createView(),
        ));
    }

    /**
     * @param Project $project
     * @return Response
     */
    public function generateReportAction(Project $project) {
        $snappy = $this->get('knp_snappy.pdf');
        $dateTime = new \DateTime();

        $html = $this->renderView('@App/management/report/project.html.twig', array(
            'project' => $project,
            'dateTime' => $dateTime
        ));

        $filename = $project->getName();

        return new Response(
            $snappy->getOutputFromHtml($html),
            200,
            array(
                'Content-Type'          => 'application/pdf',
                'Content-Disposition'   => 'inline; filename="'.$filename.'.pdf"'
            )
        );
    }
}