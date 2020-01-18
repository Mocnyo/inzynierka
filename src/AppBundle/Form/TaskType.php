<?php

namespace AppBundle\Form;

use AppBundle\Entity\Task;
use AppBundle\Entity\User;
use AppBundle\Enum\TaskStatusEnum;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TaskType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('attachment')
            ->add('user', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'fullName',
                'multiple' => true,
                'attr' => [
                    'class' => 'form-control'
                ]
            ])
            ->add('status', ChoiceType::class, [
                'choices' => [
                    'NOWY' => TaskStatusEnum::NEW,
                    'AKTYWNY' => TaskStatusEnum::ACTIVE,
                    'WSPARCIE' => TaskStatusEnum::SUPPORT,
                    'ZAMKNIĘTY' => TaskStatusEnum::CLOSED,
                    'ZAKOŃCZONY' => TaskStatusEnum::FINISHED
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Task::class,
        ));
    }

    public function getBlockPrefix()
    {
        return 'app_bundle_task_type';
    }
}
