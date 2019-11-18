<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        return $user != null ? $this->render('@App/dashboard/index.html.twig') : $this->redirectToRoute('fos_user_security_login');
    }

    public function getTimeWorked(User $user)
    {

    }
}
