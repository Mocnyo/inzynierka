<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

/**
 * Leave controller.
 *
 * @Route("/urlop")
 */
class LeaveController extends AbstractController
{

    /**
     * @Route("/kalendarz", name="urlop_calendar", methods={"GET"})
     */
    public function calendar(): Response
    {
        return $this->render('@App/user/leave/index.html.twig');
    }
}
