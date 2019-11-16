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
     * @ORM\Column(name="specialization", type="string", length=255, nullable=true)
     */
    protected $specialization;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\AgreementTime", mappedBy="user")
     */
    protected $agreementTime;

    /**
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\UserTeams", mappedBy="user")
     * @JMS\Exclude()
     */
    protected $userTeams;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Times", mappedBy="user")
     * @JMS\Exclude()
     */
    protected $times;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\ProjectsUserAssignment", mappedBy="user")
     * @JMS\Exclude()
     */
    protected $userAssignment;

    /**
     * @var \DateTime
     * @ORM\Column(name="last_activity_at", type="datetime", nullable=true)
     */
    protected $lastActivityAt;

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
     * @return string
     */
    public function getSpecialization()
    {
        return $this->specialization;
    }

    /**
     * @param string $specialization
     */
    public function setSpecialization($specialization)
    {
        $this->specialization = $specialization;
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
    public function getUserTeams()
    {
        return $this->userTeams;
    }

    /**
     * @param mixed $userTeams
     */
    public function setUserTeams($userTeams)
    {
        $this->userTeams = $userTeams;
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
}
