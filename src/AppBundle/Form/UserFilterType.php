<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Lexik\Bundle\FormFilterBundle\Filter\Form\Type as Filters;


class UserFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('fullName', Filters\TextFilterType::class, [
                'attr' => [
                    'class' => "form-control"
                ],
                'label' => 'Imię i nazwisko'
            ])
            ->add('team', Filters\EntityFilterType::class, array(
                    'class' => 'AppBundle\Entity\Team',
                    'choice_label' => 'name',
                    'attr' => [
                        'class' => "form-control mb-4"
                    ],
                    'label' => 'Dział'
            ))
        ;
        $builder->setMethod("GET");


    }

    public function getBlockPrefix()
    {
        return null;
    }
    
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'allow_extra_fields' => true,
            'csrf_protection' => false,
            'validation_groups' => array('filtering') // avoid NotBlank() constraint-related message
        ));
    }
}
