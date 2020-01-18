<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Project;
use AppBundle\Entity\Task;
use AppBundle\Enum\TaskStatusEnum;
use AppBundle\Form\TaskType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TaskController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request, Project $project)
    {
        $em = $this->getDoctrine()->getManager();
        $tasks = $em->getRepository(Task::class)->findBy(['project' => $project]);

        return $this->render('@App/management/task/index.html.twig', array(
            'tasks' => $tasks
            ));
    }

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

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function newAction(Request $request, Project $project)
    {
        $task = new Task();
        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $task->setProject($project);
            $em->persist($task);
            $em->flush();

            $editLink = $this->generateUrl('management_project_show', array('id' => $project->getId()));
            $this->get('session')->getFlashBag()->add('success', "<a href='$editLink'>New task was created successfully.</a>" );

            $nextAction=  $request->get('submit') == 'save' ? 'management_projects' : 'management_projects';
            return $this->redirectToRoute($nextAction);
        }
        return $this->render('@App/management/task/new.html.twig', array(
            'task' => $task,
            'form'   => $form->createView(),
            'project' => $project
        ));
    }

    /**
     * @param Request $request
     * @param Project $project
     * @param Task $task
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function editAction(Request $request, Project $project, Task $task)
    {
        $editForm = $this->createForm(TaskType::class, $task);
        $editForm->handleRequest($request);
        $task->setProject($project);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();

            $this->get('session')->getFlashBag()->add('success', 'Edited Successfully!');
            return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
        }
        return $this->render('@App/management/task/edit.html.twig', array(
            'task' => $task,
            'edit_form' => $editForm->createView(),
            'project' => $project
        ));
    }

    /**
     * @param Request $request
     * @param Project $project
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function closeAction(Request $request, Project $project, Task $task) {
        $task->setStatus(TaskStatusEnum::FINISHED);
        $em = $this->getDoctrine()->getManager();
        $em->persist($task);
        $em->flush();

        return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
    }

    /**
     * @param Request $request
     * @param Task $task
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function deleteAction(Request $request, Project $project, Task $task) {
        $em = $this->getDoctrine()->getManager();
        $em->remove($task);
        $em->flush();

        return $this->redirectToRoute('management_project_show', array('id' => $project->getId()));
    }
}