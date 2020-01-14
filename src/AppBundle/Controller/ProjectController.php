<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Project;
use AppBundle\Entity\ProjectUserAssignment;
use AppBundle\Entity\UserTeam;
use AppBundle\Enum\ProjectStatusEnum;
use AppBundle\Form\EmployeeType;
use AppBundle\Form\ProjectType;
use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

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
        $projectUserAssignmentRepository = $this->getDoctrine()->getRepository(ProjectUserAssignment::class);
        $projects = $projectUserAssignmentRepository->findBy(['user' => $user]);

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
        $userTeam = $user->getUserTeam();
        $team = $userTeam->getTeam();
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
    public function showManagementAction(Project $project)
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

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
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
        $projectAssignment = new ProjectUserAssignment();
        $form = $this->createForm(EmployeeType::class, $projectAssignment);
        $projectAssignment->setProject($project);
        $form->setData($projectAssignment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($projectAssignment);
            $em->flush();

            $this->get('session')->getFlashBag()->add('success', 'Edited Successfully!');
            return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
        }
        return $this->render('@App/management/project/employeeList.html.twig', array(
            'project' => $project,
            'form' => $form->createView(),
        ));
    }
}