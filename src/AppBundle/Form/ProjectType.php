<?php

namespace AppBundle\Form;

use AppBundle\Enum\ProjectStatusEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProjectType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('shortName')
            ->add('status', ChoiceType::class, [
                'choices' => [
                    'NOWY' => ProjectStatusEnum::NEW,
                    'AKTYWNY' => ProjectStatusEnum::ACTIVE,
                    'WSPARCIE' => ProjectStatusEnum::SUPPORT,
                    'ZAMKNIĘTY' => ProjectStatusEnum::CLOSED,
                    'ZAKOŃCZONY' => ProjectStatusEnum::FINISHED
                ]
            ])
            ->add('time')
            ->add('team')
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Project'
        ));
    }
}
