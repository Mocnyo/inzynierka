<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Time;
use AppBundle\Form\TimerApiType;
use Doctrine\Common\Persistence\ObjectRepository;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class TimerController
 *
 * @Rest\RouteResource("timer")
 * @Rest\NamePrefix("wtrs_api_timer_")
 */
class TimerController extends FOSRestController
{
    /**
     * @return ObjectRepository
     */
    protected function getRepository(): ObjectRepository
    {
        return $this->getDoctrine()->getRepository(Time::class);
    }

    /**
     * Send time
     * @ApiDoc  (
     *   description="Create a new Object",
     *   section="Timer",
     *   resource = true,
     *   description = "Gets a Type for a given id",
     *   output = "",
     *   statusCodes = {
     *     200 = "Returned when successful",
     *     404 = "Returned when the page is not found"
     *   }
     * )
     *
     * @return Response
     */
    public function postAction(Request $request)
    {
        $entity = new Time();
        $form = $this->createForm(TimerApiType::class, $entity)->handleRequest($request);

        if (!$form->isValid() || !$form->isSubmitted()) {
            return $this->handleView($this->view($form->getErrors(true), 400));
        }

        /** @var Time $data */
        $data = $form->getData();
        $dateDiff = $data->getStopTime()->diff($data->getStartTime(), true);

        $entity->setUser($this->getUser());
        $entity->setTime($dateDiff->format("%H:%I:%S"));
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();

        return $this->handleView($this->view($form, 200));
    }

    /**
     * Get Times
     * @ApiDoc  (
     *   description="Get all times for user",
     *   section="Timer",
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
//        $userID = $this->getUser()->getId();
        $userID = 1;
        $times = $this->getRepository()->findBy(['user' => $userID]);
        return $this->handleView($this->view($times, 200));
    }

    /**
     * Get time
     * @ApiDoc  (
     *   description="Get one time item",
     *   section="Timer",
     *   resource = true,
     *   description = "Gets a Type for a given id",
     *   output = "",
     *   statusCodes = {
     *     200 = "Returned when successful",
     *     404 = "Returned when the page is not found"
     *   }
     * )
     * @param Request $request
     * @param Time $entity
     * @return Response
     */
    public function getAction(Request $request, Time $entity)
    {
        return $this->handleView($this->view($entity, 200));
    }

    /**
     * Put time
     * @ApiDoc  (
     *   description="Get one time item",
     *   section="Timer",
     *   resource = true,
     *   description = "Gets a Type for a given id",
     *   output = "",
     *   statusCodes = {
     *     200 = "Returned when successful",
     *     404 = "Returned when the page is not found"
     *   }
     * )
     * @param Request $request
     * @param Time $entity
     * @return Response
     */
    public function putAction(Request $request, Time $entity)
    {
        $form = $this->createForm(TimerApiType::class, $entity, ['method' => 'PUT']);
        $form->handleRequest($request);

        if (!$form->isValid() || !$form->isSubmitted()) {
            return $this->handleView($this->view($form->getErrors(true), 400));
        }

        $data = $form->getData();
        $dateDiff = $data->getStopTime()->diff($data->getStartTime(), true);

        $entity->setTime($dateDiff->format("%H:%I:%S"));
        $em = $this->getDoctrine()->getManager();
        $em->persist($data);
        $em->flush();

        return $this->handleView($this->view($form, 200));
    }

    /**
     * @param Request $request
     * @param Time $entity
     */
    public function deleteAction(Request $request, Time $entity)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($entity);
        $em->flush();
    }
}