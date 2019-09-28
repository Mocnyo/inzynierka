<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * timer
 *
 * @ORM\Table(name="timer")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TimerRepository")
 */
class Timer
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="DescriptionTask", type="string", length=255)
     */
    private $descriptionTask;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="startTime", type="datetime")
     */
    private $startTime;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="stopTime", type="datetime")
     */
    private $stopTime;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="time", type="time")
     */
    private $time;


    private $user;

//    private $project;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set descriptionTask
     *
     * @param string $descriptionTask
     *
     * @return timer
     */
    public function setDescriptionTask($descriptionTask)
    {
        $this->descriptionTask = $descriptionTask;

        return $this;
    }

    /**
     * Get descriptionTask
     *
     * @return string
     */
    public function getDescriptionTask()
    {
        return $this->descriptionTask;
    }

    /**
     * Set startTime
     *
     * @param \DateTime $startTime
     *
     * @return timer
     */
    public function setStartTime($startTime)
    {
        $this->startTime = $startTime;

        return $this;
    }

    /**
     * Get startTime
     *
     * @return \DateTime
     */
    public function getStartTime()
    {
        return $this->startTime;
    }

    /**
     * Set stopTime
     *
     * @param \DateTime $stopTime
     *
     * @return timer
     */
    public function setStopTime($stopTime)
    {
        $this->stopTime = $stopTime;

        return $this;
    }

    /**
     * Get stopTime
     *
     * @return \DateTime
     */
    public function getStopTime()
    {
        return $this->stopTime;
    }

    /**
     * Set time
     *
     * @param \DateTime $time
     *
     * @return timer
     */
    public function setTime($time)
    {
        $this->time = $time;

        return $this;
    }

    /**
     * Get time
     *
     * @return \DateTime
     */
    public function getTime()
    {
        return $this->time;
    }
}

