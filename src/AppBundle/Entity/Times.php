<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Times
 *
 * @ORM\Table(name="times")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TimesRepository")
 */
class Times
{
    /**
     * @var int
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="description_task", type="string", length=255, nullable=true)
     */
    private $descriptionTask;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_time", type="datetime")
     */
    private $startTime;

    /**
     * @var \DateTime
     * @ORM\Column(name="stop_time", type="datetime")
     */
    private $stopTime;

    /**
     * @var string
     * @ORM\Column(name="time", type="string", length=22)
     */
    private $time;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="times")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

//    private $project;

    public function __construct()
    {
        $this->setStopTime(new \DateTime());
        $this->setStopTime(new \DateTime());
    }

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
     * @param string $time
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
     * @return string
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }
}
