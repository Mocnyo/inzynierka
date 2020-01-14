<?php

namespace AppBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="full_name", type="string", length=255, nullable=true)
     */
    protected $fullName;

    /**
     * @var string
     *
     * @ORM\Column(name="position", type="string", length=255, nullable=true)
     */
    protected $position;

    /**
     * @var integer
     *
     * @ORM\Column(name="room", type="integer", nullable=true)
     */
    protected $room;

    /**
     * @var integer
     *
     * @ORM\Column(name="phone", type="integer", nullable=true)
     */
    protected $phone;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\AgreementTime", mappedBy="user", cascade={"persist"})
     */
    protected $agreementTime;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Team", mappedBy="user")
     * @ORM\JoinColumn(name="team_id", referencedColumnName="id")
     * @JMS\Exclude()
     */
    protected $team;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Time", mappedBy="user")
     * @JMS\Exclude()
     */
    protected $time;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\ProjectUserAssignment", mappedBy="user")
     * @JMS\Exclude()
     */
    protected $userAssignment;

    /**
     * @var \DateTime
     * @ORM\Column(name="last_activity_at", type="datetime", nullable=true)
     */
    protected $lastActivityAt;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Post", mappedBy="user")
     * @JMS\Exclude()
     */
    protected $post;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Task", mappedBy="user")
     * @JMS\Exclude()
     */
    protected $task;

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }

    /**
     * @return string
     */
    public function getFullName()
    {
        return $this->fullName;
    }

    /**
     * @param string $fullName
     */
    public function setFullName($fullName)
    {
        $this->fullName = $fullName;
    }

    /**
     * @return mixed
     */
    public function getAgreementTime()
    {
        return $this->agreementTime;
    }

    /**
     * @param mixed $agreementTime
     */
    public function setAgreementTime($agreementTime)
    {
        $this->agreementTime = $agreementTime;
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
     * @return \DateTime
     */
    public function getLastActivityAt(): \DateTime
    {
        return $this->lastActivityAt;
    }

    /**
     * @param \DateTime $lastActivityAt
     */
    public function setLastActivityAt(\DateTime $lastActivityAt): void
    {
        $this->lastActivityAt = $lastActivityAt;
    }

    public function isActiveNow()
    {
        $delay = new \DateTime('2 minutes ago');

        return ( $this->getLastActivityAt() > $delay);
    }

    /**
     * @return string
     */
    public function getPosition(): ?string
    {
        return $this->position;
    }

    /**
     * @param string $position
     */
    public function setPosition(string $position): void
    {
        $this->position = $position;
    }

    /**
     * @return int
     */
    public function getPhone(): ?int
    {
        return $this->phone;
    }

    /**
     * @param int $phone
     */
    public function setPhone(int $phone): void
    {
        $this->phone = $phone;
    }

    /**
     * @return int
     */
    public function getRoom(): ?int
    {
        return $this->room;
    }

    /**
     * @param int $room
     */
    public function setRoom(int $room): void
    {
        $this->room = $room;
    }

    /**
     * @return mixed
     */
    public function getPost()
    {
        return $this->post;
    }

    /**
     * @param mixed $post
     */
    public function setPost($post): void
    {
        $this->post = $post;
    }

    /**
     * @return mixed
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * @param mixed $time
     */
    public function setTime($time): void
    {
        $this->time = $time;
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
}
