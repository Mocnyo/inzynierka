<?php

namespace AppBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

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
     */
    protected $userTeams;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Times", mappedBy="user")
     */
    protected $times;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\ProjectsUserAssignment", mappedBy="user")
     */
    protected $userAssignment;

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
}
