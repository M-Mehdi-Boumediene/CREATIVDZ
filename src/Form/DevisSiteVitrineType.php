<?php

namespace App\Form;

use App\Entity\DevisSiteVitrine;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class DevisSiteVitrineType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('template', ChoiceType::class, [
                'choices'  => [
                    'Oui' => "Oui",
                    'NON je préfère un codage personnalisé' => "NON je préfère un codage personnalisé",
               
                ],
            ])
            ->add('nbpages', ChoiceType::class, [
                'choices'  => [
                    '1 page accueil seul' => "1 page accueil seul",
                    '2 pages' => "2 pages",
                    '3 pages' => "3 pages",
                    '4 pages' => "4 pages",
                    '5 pages' => "5 pages",
                    '6 pages' => "6 pages",
                    '7 pages' => "7 pages",
                    '8 pages' => "8 pages",
                    '9 pages' => "9 pages",
                    '10 pages' => "10 pages",
                    '11 pages' => "11 pages",
                    '12 pages' => "12 pages",
                    '13 pages' => "13 pages",
                    '14 pages' => "14 pages",
                    '15 pages' => "15 pages",

                ],
            ])
            ->add('nbslides', ChoiceType::class, [
                'choices'  => [
                    "Pas de slide d'accueil" => "Pas de slide d'accueil",
                    '1 slide' => "1 slide",
                    '2 slides' => "2 slides",
                    '3 slides' => "3 slides",
                    '4 slides' => "4 slides",
                    '5 slides' => "5 slides",
                    '6 slides' => "6 slides",
                    '7 slides' => "7 slides",
                    '8 slides' => "8 slides",
                    '9 slides' => "9 slides",
                    '10 slides' => "10 slides",
                   
                ],
            ])

            ->add('administration', ChoiceType::class, [
                'choices'  => [
                    "Pas de page administrable" => "Pas de page administrable",
                    '1 page administrable' => "1 page administrable",
                    '2 pages administrables' => "2 pages administrables",
                    '3 pages administrables' => "3 pages administrables",
                    '4 pages administrables' => "4 pages administrables",
                    '5 pages administrables' => "5 pages administrables",
                    '6 pages administrables' => "6 pages administrables",
                    '7 pages administrables' => "7 pages administrables",
                    '8 pages administrables' => "8 pages administrables",
               
                   
                ],
            ])
          
            ->add('actualite', ChoiceType::class, [
                'choices'  => [
                    "Pas de page actualité" => "Pas de page actualité",
                    '1 page actualité' => "1 page actualité",
                 
               
                   
                ],
            ])
            ->add('responsive', ChoiceType::class, [
                'choices'  => [
                    "SANS - Optimisation au format / simple" => "SANS - Optimisation au format / simple",
                    'Optimisation 1 page' => "Optimisation 1 page",
                    'Optimisation 2 pages' => "Optimisation 2 pages",
                    'Optimisation 3 pages' => "Optimisation 3 pages",
                    'Optimisation 4 pages' => "Optimisation 4 pages",
                    'Optimisation 5 pages ' => "Optimisation 5 pages",
                    'Optimisation 6 pages' => "Optimisation 6 pages",
                    'Optimisation 7 pages' => "Optimisation 7 pages",
                   
                ],
            ])
            ->add('referencement', ChoiceType::class, [
                'choices'  => [
                    "Sans référencement" => "Sans référencement",
                    'Référencement 1 page' => "Référencement 1 page",
                    'Référencement 2 pages' => "Référencement 2 pages",
                    'Référencement 3 pages' => "Référencement 3 pages",
                    'Référencement 4 pages' => "Référencement 4 pages",
                    'Référencement 5 pages ' => "Référencement 5 pages",
                    'Référencement 6 pages' => "Référencement 6 pages",
                    'Référencement 7 pages' => "Référencement 7 pages",
                    'Référencement 8 pages' => "Référencement 8 pages",
                ],
            ])
            ->add('redaction', ChoiceType::class, [
                'choices'  => [
                    "NON tout sera fourni et préparé correctement" => "NON tout sera fourni et préparé correctement",
                    'Textes à retravailler sur 1 page' => "Textes à retravailler sur 1 page",
                    'Textes à retravailler sur 2 pages' => "Textes à retravailler sur 2 pages",
                    'Textes à retravailler sur 3 pages' => "Textes à retravailler sur 3 pages",
                    'Textes à retravailler sur 4 pages' => "Textes à retravailler sur 4 pages",
                    'Textes à retravailler sur 5 pages ' => "Textes à retravailler sur 5 pages",
                    'Textes à retravailler sur 6 pages' => "Textes à retravailler sur 6 pages",
                    'Textes à retravailler sur 7 pages' => "Textes à retravailler sur 7 pages",
                    'Textes à retravailler sur 8 pages' => "Textes à retravailler sur 8 pages",
                ],
            ])
            ->add('logo', ChoiceType::class, [
                'choices'  => [
                    "Oui" => "Oui",
                    "NON le logo est à créer en même temps" => "NON le logo est à créer en même temps",
               
                ],
            ])
            ->add('emailing', ChoiceType::class, [
                'choices'  => [
                    "SANS système de Newsletter" => "SANS système de Newsletter",
                    "AVEC système de Newsletter" => "AVEC système de Newsletter",
               
                ],
            ])
            ->add('paiement', ChoiceType::class, [
                'choices'  => [
                    "NON pas de système de commande en ligne" => "NON pas de système de commande en ligne",
                    "AVEC système de commande en ligne sur une page" => "AVEC système de commande en ligne sur une page",
                    "AVEC système de commande en ligne sur 2 pages" => "AVEC système de commande en ligne sur 2 pages",

                ],
            ])

            ->add('formcomplex', ChoiceType::class, [
                'choices'  => [
                    "Formulaire simple et classique" => "Formulaire simple et classique",
                    "Formulaire complexe" => "Formulaire complexe",
              
                ],
            ])
    
            ->add('catalogue', ChoiceType::class, [
                'choices'  => [
                    "NON pas de catalogue" => "NON pas de catalogue",
                    "OUI insertion d'un catalogue sur une page produit" => "OUI insertion d'un catalogue sur une page produit",
              
                ],
            ])
            ->add('multimedia', ChoiceType::class, [
                'choices'  => [
                    "NON" => "NON",
                    "OUI avec un son ou une vidéo sur une des pages du site web" => "OUI avec un son ou une vidéo sur une des pages du site web",
              
                ],
            ])
            ->add('reservation', ChoiceType::class, [
                'choices'  => [
                    "NON" => "NON",
                    "OUI insertion d'un système de réservation en ligne" => "OUI insertion d'un système de réservation en ligne",
              
                ],
            ])
            ->add('statistiques', ChoiceType::class, [
                'choices'  => [
                    "NON" => "NON",
                    "OUI statistiques détaillés" => "OUI statistiques détaillés",
              
                ],
            ])

            ->add('nom', TextType::class, ['attr' => array(
          'placeholder' => 'Votre Nom'
      )])
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
            'data_class' => DevisSiteVitrine::class,
        ]);
    }
}
