<?php

namespace AppBundle\Command;

use AppBundle\Entity\Project;
use AppBundle\Entity\Task;
use AppBundle\Entity\Time;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class TaskTimeCommand extends Command
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
        $this->setName('wstr:task:time:process');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $tasks = $this->em->getRepository(Task::class)->findAll();

        /** @var Task $task */
        foreach ($tasks as $task) {
            $times = $this->em->getRepository(Time::class)->findBy(['descriptionTask' => $task->getName()]);
            $totality = 0;
            foreach ($times as $time) {
                if ($time->getProject()->getId() === $task->getProject()->getId()) {
                    $intTime = strtotime($time->getTime());
                    $totality += $intTime;
                }
            }
            $time = date("H:i:s", $totality);
            $task->setTime($time);
            $this->em->persist($task);
        }

        $this->em->flush();

        $output->writeln('Success');
    }
}