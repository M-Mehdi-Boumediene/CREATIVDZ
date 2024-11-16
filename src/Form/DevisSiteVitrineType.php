<?php

namespace App\Form;

use App\Entity\DevisSiteVitrine;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DevisSiteVitrineType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('template')
            ->add('nbpages')
            ->add('nbslides')
            ->add('administration')
            ->add('actualite')
            ->add('responsive')
            ->add('referencement')
            ->add('redaction')
            ->add('logo')
            ->add('emailing')
            ->add('paiement')
            ->add('formcomplex')
            ->add('multimedia')
            ->add('catalogue')
            ->add('reservation')
            ->add('statistiques')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => DevisSiteVitrine::class,
        ]);
    }
}
