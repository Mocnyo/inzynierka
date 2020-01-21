<?php

namespace AppBundle\Command;

use AppBundle\Entity\Project;
use AppBundle\Entity\Time;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ProjectTimeCommand extends Command
{
    /** @var EntityManager */
    protected $em;

    /**
     * ProjectTimeCommand constructor.
     * @param EntityManager $em
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
        parent::__construct();
    }

    protected function configure()
    {
        $this->
            setName('wstr:time:process');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $projects = $this->em->getRepository(Project::class)->findAll();

        /** @var Project $project */
        foreach ($projects as $project) {
            $projectTime = $project->getTime();
            $times = $project->getTimes();
            $totality = 0;

            /** @var Time $time */
            foreach ($times as $time) {
                $intTime = strtotime($time->getTime());
                $totality += $intTime;
            }

            $time = date("H:i:s", $totality);
            $project->setTime($time);
            $this->em->persist($project);
        }

        $this->em->flush();

        $output->writeln('Success');
    }
}