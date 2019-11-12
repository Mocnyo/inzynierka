<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Projects;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\User;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\Pagerfanta;
use Pagerfanta\View\TwitterBootstrap3View;
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
        /**  @var User $user **/
        $user = $this->getUser();
        $projects = $user->getUserAssignment();

        $test = 10;
        return $this->render('@App/project/index.html.twig', [
            'projects' => $projects
        ]);
    }
}