<?php

namespace AppBundle\Form;

use AppBundle\Entity\User;
use AppBundle\Entity\Vacation;
use AppBundle\Enum\VacationAcceptedEnum;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class VacationType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('beginAt', DateType::class, [
                'attr' => [
                    'class' => 'form-control'
                ],
                'widget' => 'single_text',
                'label' => 'Rozpoczęcie urlopu'
            ])
            ->add('endAt', DateType::class, [
                'attr' => [
                    'class' => 'form-control'
                ],
                'widget' => 'single_text',
                'label' => 'Zakończenie urlopu'
            ])
            ->add('title');
            if (in_array('ROLE_ADMIN', $options['role'])) {
                $builder
                    ->add('isAccepted', ChoiceType::class, [
                        'choices' => [
                            'Tak' => VacationAcceptedEnum::YES,
                            'Nie' => VacationAcceptedEnum::NO
                        ],
                        'label' => 'Urlop zatwierdzony'
                    ])
                    ->add('user', EntityType::class, [
                        'class' => User::class,
                        'label' => 'Pracownik',
                        'choice_label' => 'fullName'
                    ]);
            }
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Vacation::class,
            'role' => ['ROLE_USER']
        ));
    }
}
