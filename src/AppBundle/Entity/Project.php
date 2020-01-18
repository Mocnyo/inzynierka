<?php

namespace AppBundle\Entity;

use AppBundle\Enum\ProjectStatusEnum;
use Doctrine\Common\Collections\ArrayCollection;
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
     * @var string
     * @ORM\Column(name="description", type="text")
     */
    private $description;

//    /**
//     * @ORM\OneToMany(targetEntity="AppBundle\Entity\ProjectUserAssignment", mappedBy="project")
//     * @JMS\Exclude()
//     */
//    private $userAssignment;

    /**
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\User", inversedBy="project")
     * @ORM\JoinTable(name="project_user")
     * @JMS\Exclude()
     */
    private $user;

    /**
     * @var string
     * @ORM\Column(name="time", type="string", length=22, nullable=true)
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

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="projectOwner")
     * @ORM\JoinColumn(name="owner_id")
     * @JMS\Exclude()
     */
    protected $owner;

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
        return $this->task;
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

    public function __construct()
    {
        $this->user = new ArrayCollection();
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

    /**
     * @return string
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
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

    /**
     * @return mixed
     */
    public function getTask()
    {
        return $this->task;
    }

    /**
     * @param mixed $task
     */
    public function setTask($task): void
    {
        $this->task = $task;
    }

    /**
     * @return mixed
     */
    public function getTimes()
    {
        return $this->times;
    }

    /**
     * @param mixed $times
     */
    public function setTimes($times): void
    {
        $this->times = $times;
    }

    /**
     * @return mixed
     */
    public function getOwner()
    {
        return $this->owner;
    }

    /**
     * @param mixed $owner
     */
    public function setOwner($owner): void
    {
        $this->owner = $owner;
    }
}

