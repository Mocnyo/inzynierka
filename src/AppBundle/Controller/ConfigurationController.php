<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ConfigurationController
 * @package AppBundle\Controller
 */
class ConfigurationController extends Controller
{
    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        $info = ini_get_all();
        $systemName = php_uname();
        $phpversion = phpversion();
        $serverInfo = $_SERVER;
        return $this->render('@App/administration/configuration/index.html.twig',
            [
                'info' => $info,
                'system' => $systemName,
                'php' => $phpversion,
                'serverInfo' => $serverInfo
            ]);
    }

}