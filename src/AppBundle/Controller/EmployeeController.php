<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class EmployeeController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        return $this->render('@App/employee/index.html.twig');
//         return $user != null ? $this->redirectToRoute('fos_user_profile_show') : $this->redirectToRoute('fos_user_security_login');
    }
}