<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

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
     * @JMS\Exclude()
     */
    private $user;

//    private $project;

    public function __construct()
    {
        $this->setStopTime(new \DateTime());
        $this->setStopTime(new \DateTime());
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getDescriptionTask(): ?string
    {
        return $this->descriptionTask;
    }

    /**
     * @param string $descriptionTask
     */
    public function setDescriptionTask(string $descriptionTask): void
    {
        $this->descriptionTask = $descriptionTask;
    }

    /**
     * @return \DateTime
     */
    public function getStartTime(): ?\DateTime
    {
        return $this->startTime;
    }

    /**
     * @param \DateTime $startTime
     */
    public function setStartTime(\DateTime $startTime): void
    {
        $this->startTime = $startTime;
    }

    /**
     * @return \DateTime
     */
    public function getStopTime(): \DateTime
    {
        return $this->stopTime;
    }

    /**
     * @param \DateTime $stopTime
     */
    public function setStopTime(\DateTime $stopTime): void
    {
        $this->stopTime = $stopTime;
    }

    /**
     * @return string
     */
    public function getTime(): string
    {
        return $this->time;
    }

    /**
     * @param string $time
     */
    public function setTime(string $time): void
    {
        $this->time = $time;
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
    public function setUser($user): void
    {
        $this->user = $user;
    }
}
