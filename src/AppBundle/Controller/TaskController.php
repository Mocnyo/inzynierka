<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Task;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TaskController extends Controller
{

    /**
     * @param Request $request
     * @param Task $task
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAction(Request $request, Task $task) {

        return $this->render('@App/user/task/show.html.twig', array(
            'task' => $task
        ));
    }

//    /**
//     * @param Request $request
//     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
//     */
//    public function newManagementAction(Request $request)
//    {
//        $project = new Project();
//        $form = $this->createForm(ProjectType::class, $project);
//        $form->handleRequest($request);
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            $em = $this->getDoctrine()->getManager();
//            $em->persist($project);
//            $em->flush();
//
//            $editLink = $this->generateUrl('management_projects', array('id' => $project->getId()));
//            $this->get('session')->getFlashBag()->add('success', "<a href='$editLink'>New project was created successfully.</a>" );
//
//            $nextAction=  $request->get('submit') == 'save' ? 'management_projects' : 'management_projects';
//            return $this->redirectToRoute($nextAction);
//        }
//        return $this->render('@App/management/projects/new.html.twig', array(
//            'project' => $project,
//            'form'   => $form->createView(),
//        ));
//    }
//
//    /**
//     * @param Request $request
//     * @param Project $project
//     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
//     */
//    public function editManagementAction(Request $request, Project $project)
//    {
//        $editForm = $this->createForm(ProjectType::class, $project);
//        $editForm->handleRequest($request);
//
//        if ($editForm->isSubmitted() && $editForm->isValid()) {
//            $em = $this->getDoctrine()->getManager();
//            $em->persist($project);
//            $em->flush();
//
//            $this->get('session')->getFlashBag()->add('success', 'Edited Successfully!');
//            return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
//        }
//        return $this->render('@App/management/projects/edit.html.twig', array(
//            'project' => $project,
//            'edit_form' => $editForm->createView(),
//        ));
//    }
//
//    /**
//     * @param Request $request
//     * @param Project $project
//     * @return \Symfony\Component\HttpFoundation\RedirectResponse
//     */
//    public function finishManagementAction(Request $request, Project $project) {
//        $project->setStatus(ProjectStatusEnum::FINISHED);
//        $em = $this->getDoctrine()->getManager();
//        $em->persist($project);
//        $em->flush();
//
//        return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
//    }
}