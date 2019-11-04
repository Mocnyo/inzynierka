<?php

namespace AppBundle\Form;

use AppBundle\Entity\Times;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TimerApiType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('descriptionTask', TextType::class)
            ->add('startTime', DateTimeType::class, [
                'with_seconds' => true
            ])
            ->add('stopTime', DateTimeType::class, [
                'with_seconds' => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            [
                'data_class' => Times::class,
                'csrf_protection' => false
            ]
        );
    }

    public function getBlockPrefix()
    {
        return 'Timer';
    }
}
