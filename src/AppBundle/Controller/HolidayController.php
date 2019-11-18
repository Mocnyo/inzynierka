<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Pagerfanta\Pagerfanta;
use Pagerfanta\Adapter\DoctrineORMAdapter;
use Pagerfanta\View\TwitterBootstrap3View;
use AppBundle\Entity\Urlop;
use Symfony\Component\HttpFoundation\Response;

/**
 * Urlop controller.
 *
 * @Route("/urlop")
 */
class HolidayController extends AbstractController
{

    /**
     * @Route("/kalendarz", name="urlop_calendar", methods={"GET"})
     */
    public function calendar(): Response
    {
        return $this->render('@App/urlop/index.html.twig');
    }
}
