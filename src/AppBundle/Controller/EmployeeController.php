<?php

namespace AppBundle\Controller;

use AppBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $user = $this->getUser();
        return $this->render('@App/user/employee/index.html.twig');
//         return $user != null ? $this->redirectToRoute('fos_user_profile_show') : $this->redirectToRoute('fos_user_security_login');
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function reportIndexAction(Request $request) {
        /** @var User $user */
        $user = $this->getUser();
        $userRepository = $this->getDoctrine()->getRepository(User::class);
        $users = $userRepository->findBy(['team' => $user->getTeam()]);
        return $this->render('@App/management/report/index.html.twig', [
            'users' => $users
        ]);
    }

    /**
     * @param Request $request
     * @param User $user
     * @return Response
     * @throws \Exception
     */
    public function generateDailyReportAction(Request $request, User $user) {
            $snappy = $this->get('knp_snappy.pdf');
            $dateTime = new \DateTime();

            $html = $this->renderView('@App/management/report/daily.html.twig', array(
                'user' => $user,
                'dateTime' => $dateTime
            ));

            $filename = 'myFirstSnappyPDF';

            return new Response(
                $snappy->getOutputFromHtml($html),
                200,
                array(
                    'Content-Type'          => 'application/pdf',
                    'Content-Disposition'   => 'inline; filename="'.$filename.'.pdf"'
                )
            );
    }

    /**
     * @param Request $request
     * @param User $user
     * @return Response
     * @throws \Exception
     */
    public function generateWeeklyReportAction(Request $request, User $user) {
        $snappy = $this->get('knp_snappy.pdf');
        $dateTime = new \DateTime();

        $monday = date("Y-m-d", strtotime("monday this week"));

        $html = $this->renderView('@App/management/report/weekly.html.twig', array(
            'user' => $user,
            'dateTime' => $dateTime,
            'monday' => $monday
        ));

        $filename = 'myFirstSnappyPDF';

        return new Response(
            $snappy->getOutputFromHtml($html),
            200,
            array(
                'Content-Type'          => 'application/pdf',
                'Content-Disposition'   => 'inline; filename="'.$filename.'.pdf"'
            )
        );
    }

    /**
     * @param Request $request
     * @param User $user
     * @return Response
     * @throws \Exception
     */
    public function generateMonthlyReportAction(Request $request, User $user) {
        $snappy = $this->get('knp_snappy.pdf');
        $dateTime = new \DateTime();

        $html = $this->renderView('@App/management/report/monthly.html.twig', array(
            'user' => $user,
            'dateTime' => $dateTime
        ));

        $filename = 'myFirstSnappyPDF';

        return new Response(
            $snappy->getOutputFromHtml($html),
            200,
            array(
                'Content-Type'          => 'application/pdf',
                'Content-Disposition'   => 'inline; filename="'.$filename.'.pdf"'
            )
        );
    }
}