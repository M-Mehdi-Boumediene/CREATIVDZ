<?php

namespace App\Form;

use App\Entity\Audit;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class AuditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('logo', ChoiceType::class, [
                
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
            ->add('slogan', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
            ->add('siteweb', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])

            ->add('charte', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
          
            ->add('cartes', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
            ->add('prospectus', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
            ->add('publicite', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
            ->add('serigraphie', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
            ->add('signalise', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])
            ->add('foirs', ChoiceType::class, [
                'expanded' => true,
                'choices'  => [
                    'Oui' => "Oui",
                    'Non' => "Non",
               
                ],
            ])

      ->add('email', TextType::class, ['attr' => array(
        'placeholder' => 'Email'
    )])
    ->add('tel', TextType::class, ['attr' => array(
        'placeholder' => 'Numéro de Téléphone'
    )])
         
          
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Audit::class,
        ]);
    }
}
