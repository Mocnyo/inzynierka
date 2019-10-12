<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Times;
use AppBundle\Repository\TimesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class TimerController extends Controller
{

    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        $userID = $user->getId();
        $timerRepository = $this->getDoctrine()->getRepository(Times::class);
        $times = $timerRepository->findBy(["user" => $userID]);
        return $this->render('@App/timer/index.html.twig', [
            'times' => $times
        ]);
//         return $user != null ? $this->redirectToRoute('fos_user_profile_show') : $this->redirectToRoute('fos_user_security_login');
    }
}
