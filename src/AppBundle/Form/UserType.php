<?php

namespace AppBundle\Form;

use AppBundle\Entity\Agreement;
use AppBundle\Entity\AgreementTime;
use AppBundle\Entity\Team;
use AppBundle\Entity\Teams;
use AppBundle\Entity\User;
use AppBundle\Entity\UserTeam;
use AppBundle\Entity\UserTeams;
use AppBundle\Repository\AgreementRepository;
use FOS\UserBundle\Model\UserInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('fullName', TextType::class, [
                'label' => 'Imię i nazwisko',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
            ])
            ->add('position',  TextType::class, [
                'label' => 'Stanowisko',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
            ])
            ->add('phone',  TextType::class, [
                'label' => 'Nr kontatowy',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
            ])
            ->add('room',  TextType::class, [
                'label' => 'Pokój',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
            ])
            ->add('team', EntityType::class, [
                'label' => 'Dział',
                'choice_label' => 'name',
                'class' => Team::class,
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
            ])
            ->add('email', EmailType::class, array('label' => 'form.email', 'translation_domain' => 'FOSUserBundle',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
                ))
            ->add('username', null, array('label' => 'form.username', 'translation_domain' => 'FOSUserBundle',
                'label' => 'Nazwa użytkownika',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
                ))
            ->add('plainPassword', RepeatedType::class, array(
                'type' => PasswordType::class,
                'options' => array(
                    'translation_domain' => 'FOSUserBundle',
                    'attr' => [
                        'class' => 'form-control'
                    ],
                    'required' => true
                ),
                'first_options' => array('label' => 'form.password'),
                'second_options' => array('label' => 'form.password_confirmation'),
                'invalid_message' => 'fos_user.password.mismatch',
                'attr' => [
                    'class' => 'form-control'
                ]
            ))
            ->add('enabled', ChoiceType::class,[
                'label' => 'Konto włączone',
                'attr' => [
                    'class' => 'form-control'
                ],
                'choices' => [
                    'Wyłączone' => 0,
                    'Włączone' => 1
                ]
            ])
            ->add('agreementTime', AgreementTimeType::class, [
                'label' => 'Warunki umowy',
            ])
            ->add('roles', ChoiceType::class, [
                'label' => 'Rola w systemie',
                'attr' => [
                    'class' => 'form-control'
                ],
                'multiple' => true,
                'choices' => [
                    'Użytkownik' => UserInterface::ROLE_DEFAULT,
                    'Kierownik' => 'ROLE_ADMIN',
                    'Administrator' => UserInterface::ROLE_SUPER_ADMIN
                ]
            ])
            ->add('vacationTime', TextType::class, [
                'label' => 'Dni urlopu',
                'attr' => [
                    'class' => 'form-control'
                ],
                'required' => true
            ])
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => User::class
        ));
    }
}
