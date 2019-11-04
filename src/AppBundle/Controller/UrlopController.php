<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Urlop;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

/**
 * Urlop controller.
 *
 * @Route("urlop")
 */
class UrlopController extends Controller
{
    /**
     * Lists all urlop entities.
     *
     * @Route("/", name="urlop_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $urlops = $em->getRepository('AppBundle:Urlop')->findAll();

        return $this->render('urlop/index.html.twig', array(
            'urlops' => $urlops,
        ));
    }

    /**
     * Finds and displays a urlop entity.
     *
     * @Route("/{id}", name="urlop_show")
     * @Method("GET")
     */
    public function showAction(Urlop $urlop)
    {

        return $this->render('urlop/show.html.twig', array(
            'urlop' => $urlop,
        ));
    }

    /**
     * @Route("/calendar", name="booking_calendar", methods={"GET"})
     */
    public function calendar(): Response
    {
        return $this->render('@App/urlop/index.html.twig');
    }
}
