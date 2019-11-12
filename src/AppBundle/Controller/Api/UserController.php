<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Times;
use AppBundle\Entity\User;
use AppBundle\Form\TimerApiType;
use AppBundle\Repository\TimesRepository;
use Doctrine\Common\Persistence\ObjectRepository;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class UserController
 *
 * @Rest\RouteResource("user")
 * @Rest\NamePrefix("wtrs_api_user_")
 */
class UserController extends FOSRestController
{
    /**
     * @return ObjectRepository
     */
    protected function getRepository(): ObjectRepository
    {
        return $this->getDoctrine()->getRepository(User::class);
    }

    /**
     * Get users
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
        $users = $this->getRepository()->findAll();
        return $this->handleView($this->view($users, 200));
    }

    /**
     * Get user
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
     * @param User $entity
     * @return Response
     */
    public function getAction(Request $request, User $entity)
    {
        return $this->handleView($this->view($entity, 200));
    }
}