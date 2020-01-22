<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Project;
use AppBundle\Entity\Team;
use Doctrine\Common\Persistence\ObjectRepository;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ProjectController
 *
 * @Rest\RouteResource("project")
 * @Rest\NamePrefix("wtrs_api_project_")
 */
class ProjectController extends FOSRestController
{
    /**
     * @return ObjectRepository
     */
    protected function getRepository(): ObjectRepository
    {
        return $this->getDoctrine()->getRepository(Project::class);
    }

    /**
     * Get projects
     * @ApiDoc  (
     *   description="Get all times for user",
     *   section="Users",
     *   resource = true,
     *   description = "Gets a Type for a given id",
     *   output = "",
     *   statusCodes = {
     *     200 = "Returned when successful",
     *     404 = "Returned when the page is not found"
     *   }
     * )
     * @return Response
     */
    public function cgetAction(Request $request)
    {
        $teams = $this->getRepository()->findAll();
        return $this->handleView($this->view($teams, 200));
    }

    /**
     * Get project
     * @ApiDoc  (
     *   description="Get one time item",
     *   section="Users",
     *   resource = true,
     *   description = "Gets a Type for a given id",
     *   output = "",
     *   statusCodes = {
     *     200 = "Returned when successful",
     *     404 = "Returned when the page is not found"
     *   }
     * )
     * @param Request $request
     * @param Team $entity
     * @return Response
     */
    public function getAction(Request $request, Team $entity)
    {
        return $this->handleView($this->view($entity, 200));
    }

    /**
     * Get Tasks
     * @ApiDoc  (
     *   description="Get one time item",
     *   section="Users",
     *   resource = true,
     *   description = "Gets a Type for a given id",
     *   output = "",
     *   statusCodes = {
     *     200 = "Returned when successful",
     *     404 = "Returned when the page is not found"
     *   }
     * )
     * @param Request $request
     * @param Project $project
     * @return Response
     */
    public function getTasksAction(Request $request, Project $project)
    {
        $tasks = $project->getTasks();
        return $this->handleView($this->view($tasks, 200));
    }
}