<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ProjectsUserAssignment
 *
 * @ORM\Table(name="projects_user_assignment")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProjectUserAssignmentRepository")
 */
class ProjectsUserAssignment
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
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }
}

