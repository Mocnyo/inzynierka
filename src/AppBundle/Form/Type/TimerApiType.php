<?php

namespace AppBundle\Form\Type;

use AppBundle\Entity\Timer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TimerApiType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('descriptionTask', TextType::class)
            ->add('startTime', DateTimeType::class)
            ->add('stopTime', DateTimeType::class)
//            ->add('time', TimeType::class)
//            ->add('user', TextType::class, ['mapped' => false])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            [
                'data_class' => Timer::class,
                'csrf_protection' => false
            ]
        );
    }

    public function getBlockPrefix()
    {
        return 'Timer';
    }
}
