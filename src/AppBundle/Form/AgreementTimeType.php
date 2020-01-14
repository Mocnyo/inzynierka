<?php

namespace AppBundle\Form;

use AppBundle\Entity\Agreement;
use AppBundle\Entity\AgreementTime;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AgreementTimeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('agreement', EntityType::class, [
            'label' => 'Rodzaj umowy',
            'choice_label' => 'name',
            'class' => Agreement::class,
            'attr' => [
                'class' => 'form-control'
            ],
        ])
            ->add('isIndefinite', CheckboxType::class, [
                'attr' => [
                    'class' => 'form-check form-check-inline mt-5 mb-5 ml-3'
                ],
                'label' => 'Czas nieokreslony ?'
            ])
            ->add('date', DateType::class, [
                'attr' => [
                    'class' => 'form-control'
                ],
                'widget' => 'single_text',
                'label' => 'Zaznacz kiedy umowa dobiega końca'
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => AgreementTime::class
        ));
    }

    public function getBlockPrefix()
    {
        return 'app_bundle_agreement_time_form';
    }
}
