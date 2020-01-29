<?php

namespace AppBundle\Form;

use AppBundle\Entity\Post;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PostType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', null, [
                'attr' => [
                    'placeholder' => 'Tytuł artykułu',
                    'class' => 'form-control mb-4',
                ]
            ])
            ->add('description', CKEditorType::class, [
                'attr' => [
                    'placeholder' => 'Treść artykułu',
                    'class' => 'form-control',
                    'rows' => '8'
                ],
                'autoload' => true
            ])
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Post::class
        ));
    }
}
