<?php

namespace AppBundle\Entity;

use AppBundle\Enum\ProjectStatusEnum;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * Project
 *
 * @ORM\Table(name="project")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProjectRepository")
 */
class Project
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     * @ORM\Column(name="short_name", type="string", length=255)
     */
    private $shortName;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\ProjectUserAssignment", mappedBy="project")
     * @JMS\Exclude()
     */
    private $userAssignment;

    /**
     * @var string
     * @ORM\Column(name="time", type="string", length=22)
     */
    private $time;

    /**
     * @var string
     * @ORM\Column(name="status", type="string")
     */
    private $status = ProjectStatusEnum::NEW;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Task", mappedBy="project")
     * @JMS\Exclude()
     */
    protected $task;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Time", mappedBy="project")
     * @JMS\Exclude()
     */
    protected $times;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Team", inversedBy="project")
     * @ORM\JoinColumn(name="team_id", referencedColumnName="id")
     * @JMS\Exclude()
     */
    protected $team;

    public function __toString()
    {
        return $this->getName();
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
     * Set name
     *
     * @param string $name
     *
     * @return Project
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set shortName
     *
     * @param string $shortName
     *
     * @return Project
     */
    public function setShortName($shortName)
    {
        $this->shortName = $shortName;

        return $this;
    }

    /**
     * Get shortName
     *
     * @return string
     */
    public function getShortName()
    {
        return $this->shortName;
    }

    /**
     * @return mixed
     */
    public function getUserAssignment()
    {
        return $this->userAssignment;
    }

    /**
     * @param mixed $userAssignment
     */
    public function setUserAssignment($userAssignment): void
    {
        $this->userAssignment = $userAssignment;
    }

    /**
     * @return string
     */
    public function getTime(): ?string
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
    public function getTasks()
    {
        return $this->tasks;
    }

    /**
     * @param mixed $tasks
     */
    public function setTasks($tasks): void
    {
        $this->tasks = $tasks;
    }

    /**
     * @return mixed
     */
    public function getTeam()
    {
        return $this->team;
    }

    /**
     * @param mixed $team
     */
    public function setTeam($team): void
    {
        $this->team = $team;
    }

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * @param string $status
     */
    public function setStatus(string $status): void
    {
        $this->status = $status;
    }
}

