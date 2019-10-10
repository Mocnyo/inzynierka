<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TimerController extends Controller
{

    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        return $this->render('@App/timer/index.html.twig');
//         return $user != null ? $this->redirectToRoute('fos_user_profile_show') : $this->redirectToRoute('fos_user_security_login');
    }
}
