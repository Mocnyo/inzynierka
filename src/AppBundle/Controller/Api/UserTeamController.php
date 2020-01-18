<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Team;
use AppBundle\Entity\User;
use Doctrine\Common\Persistence\ObjectRepository;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;

/**
 * Class UserTeamController
 *
 * @Rest\RouteResource("user_team")
 * @Rest\NamePrefix("wtrs_api_user_teams")
 */
class UserTeamController extends FOSRestController
{
    /**
     * @return ObjectRepository
     */
    protected function getRepository(): ObjectRepository
    {
        return $this->getDoctrine()->getRepository(User::class);
    }

//    /**
//     * Get teams
//     * @ApiDoc  (
//     *   description="Get all times for user",
//     *   section="Users",
//     *   resource = true,
//     *   description = "Gets a Type for a given id",
//     *   output = "",
//     *   statusCodes = {
//     *     200 = "Returned when successful",
//     *     404 = "Returned when the page is not found"
//     *   }
//     * )
//     * @return Response
//     */
//    public function cgetAction(Request $request)
//    {
//        $teams = $this->getRepository()->findAll();
//        return $this->handleView($this->view($teams, 200));
//    }

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
     * @param $teamID
     * @return int
     */
     public function getUsersByTeamAction(Request $request, $teamID)
     {
         $userTeams = $this->getRepository()->findBy(['team' => $teamID]);
         $users = [];
         foreach ($userTeams as $userTeam) {
             $users[] = $userTeam->getUser();
         }

         return $this->handleView($this->view($users, 200));
     }

//    /**
//     * Get user
//     * @ApiDoc  (
//     *   description="Get one time item",
//     *   section="Users",
//     *   resource = true,
//     *   description = "Gets a Type for a given id",
//     *   output = "",
//     *   statusCodes = {
//     *     200 = "Returned when successful",
//     *     404 = "Returned when the page is not found"
//     *   }
//     * )
//     * @param Request $request
//     * @param Teams $entity
//     * @return Response
//     */
//    public function getAction(Request $request, Teams $entity)
//    {
//        return $this->handleView($this->view($entity, 200));
//    }
}