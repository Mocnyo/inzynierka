<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * AgreementTime
 *
 * @ORM\Table(name="agreement_time")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\AgreementTimeRepository")
 */
class AgreementTime
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
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var bool
     *
     * @ORM\Column(name="is_indefinite", type="boolean", nullable=true)
     */
    private $isIndefinite;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="agreementTime")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Agreement", inversedBy="agreementTime")
     * @ORM\JoinColumn(name="agreement_id", referencedColumnName="id")
     */
    private $agreement;

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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return AgreementTime
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set isIndefinite
     *
     * @param boolean $isIndefinite
     *
     * @return AgreementTime
     */
    public function setIsIndefinite($isIndefinite)
    {
        $this->isIndefinite = $isIndefinite;

        return $this;
    }

    /**
     * Get isIndefinite
     *
     * @return bool
     */
    public function getIsIndefinite()
    {
        return $this->isIndefinite;
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

    /**
     * @return mixed
     */
    public function getAgreement()
    {
        return $this->agreement;
    }

    /**
     * @param mixed $agreement
     */
    public function setAgreement($agreement)
    {
        $this->agreement = $agreement;
    }
}

