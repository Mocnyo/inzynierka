<?php

namespace AppBundle\Entity;

use AppBundle\Enum\VacationAcceptedEnum;
use Doctrine\ORM\Mapping as ORM;

/**
 * Leave
 *
 * @ORM\Table(name="vacation")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\VacationRepository")
 */
class Vacation
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Id
     */
    private $id;

    /**
     * @ORM\Column(name="begin_at", type="datetime")
     */
    private $beginAt;

    /**
     * @ORM\Column(name="end_at", type="datetime", nullable=true)
     */
    private $endAt = null;

    /**
     * @ORM\Column(name="title", type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(name="is_accepted", type="boolean")
     */
    private $isAccepted = VacationAcceptedEnum::NO;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User", inversedBy="vacation")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

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
     * @return mixed
     */
    public function getBeginAt()
    {
        return $this->beginAt;
    }

    /**
     * @param mixed $beginAt
     */
    public function setBeginAt($beginAt): void
    {
        $this->beginAt = $beginAt;
    }

    /**
     * @return mixed
     */
    public function getEndAt()
    {
        return $this->endAt;
    }

    /**
     * @param mixed $endAt
     */
    public function setEndAt($endAt): void
    {
        $this->endAt = $endAt;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title): void
    {
        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getIsAccepted()
    {
        return $this->isAccepted;
    }

    /**
     * @param mixed $isAccepted
     */
    public function setIsAccepted($isAccepted): void
    {
        $this->isAccepted = $isAccepted;
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

