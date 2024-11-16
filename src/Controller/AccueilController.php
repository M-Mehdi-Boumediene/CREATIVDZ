<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpKernel\Attribute\Cache;

class AccueilController extends AbstractController
{
    #[Cache(public: true, maxage: 3600, mustRevalidate: true)]
    #[Route('/', name: 'app_accueil')]
    public function index()
    {
        return $this->render('index.html.twig', [
   
        ]);
    }

    #[Route('/site-web/création-site-internet', name: 'app_siteweb')]
    public function siteweb()
    {
        return $this->render('siteWeb.html.twig', [
   
        ]);
    }
    #[Route('/site-vitrine/création-site-vitrine', name: 'app_sitevitrine')]
    public function sitevitrine()
    {
        return $this->render('siteVitrine.html.twig', [
   
        ]);
    }
    #[Route('/site-catalogue/création-site-catalogue', name: 'app_sitecatalogue')]
    public function sitecatalogue()
    {
        return $this->render('siteCatalogue.html.twig', [
   
        ]);
    }
    #[Route('/site-e-commerce/création-site-e-commerce', name: 'app_siteecommerce')]
    public function siteecommerce()
    {
        return $this->render('siteEcommerce.html.twig', [
   
        ]);
    }

    #[Route('/site-internet/référencement-seo', name: 'app_referencement')]
    public function siteReferencement()
    {
        return $this->render('siteReferencement.html.twig', [
   
        ]);
    }

    #[Route('/développement-web/création-application-web', name: 'app_application')]
    public function aplication()
    {
        return $this->render('application.html.twig', [
   
        ]);
    }

    #[Route('/développement-web/crm', name: 'app_crm')]
    public function crm()
    {
        return $this->render('crm.html.twig', [
   
        ]);
    }

    #[Route('/développement-web/erp', name: 'app_erp')]
    public function erp()
    {
        return $this->render('erp.html.twig', [
   
        ]);
    }

    #[Route('/consulting-si/diagnostic-si', name: 'app_diagnostic')]
    public function diagnostic()
    {
        return $this->render('diagnostic.html.twig', [
   
        ]);
    }
    #[Route('/consulting-si/stratégie-accompagnement', name: 'app_strategie')]
    public function strategie()
    {
        return $this->render('strategie.html.twig', [
   
        ]);
    }
    #[Route('/consulting-si/transformation-numérique', name: 'app_transformation')]
    public function transformation()
    {
        return $this->render('transformation.html.twig', [
   
        ]);
    }
    #[Route('/consulting-si/gouvernance-it', name: 'app_gouvernance')]
    public function gouvernance()
    {
        return $this->render('gouvernance.html.twig', [
   
        ]);
    }
    #[Route('/consulting-si/support-maintenance', name: 'app_support')]
    public function support()
    {
        return $this->render('support.html.twig', [
   
        ]);
    }

    #[Route('/marketing-digital/stratégie', name: 'app_marketing')]
    public function marketing()
    {
        return $this->render('marketing.html.twig', [
   
        ]);
    }
    #[Route('/marketing-digital/publicité-SEA', name: 'app_sea')]
    public function sea()
    {
        return $this->render('sea.html.twig', [
   
        ]);
    }
    #[Route('/marketing-digital/réseaux-sociaux', name: 'app_reseaux')]
    public function reseaux()
    {
        return $this->render('reseaux.html.twig', [
   
        ]);
    }
    #[Route('/marketing-digital/email-marketing-automatisation', name: 'app_email')]
    public function email()
    {
        return $this->render('email.html.twig', [
   
        ]);
    }

    #[Route('/création/notre-strategie', name: 'app_notrestrategie')]
    public function notrestrategie()
    {
        return $this->render('notrestrategie.html.twig', [
   
        ]);
    }

    #[Route('/création/logo', name: 'app_logo')]
    public function logo()
    {
        return $this->render('logo.html.twig', [
   
        ]);
    }
    #[Route('/création/charte', name: 'app_charte')]
    public function charte()
    {
        return $this->render('charte.html.twig', [
   
        ]);
    }
    #[Route('/imprimerie', name: 'app_imprimerie')]
    public function imprimerie()
    {
        return $this->render('imprimerie.html.twig', [
   
        ]);
    }
    #[Route('/imprimerie/carte', name: 'app_carte')]
    public function carte()
    {
        return $this->render('carte.html.twig', [
   
        ]);
    }
    #[Route('/imprimerie/flyer', name: 'app_flyer')]
    public function flyer()
    {
        return $this->render('flyer.html.twig', [
   
        ]);
    }
    #[Route('/imprimerie/brochure', name: 'app_brochure')]
    public function brochure()
    {
        return $this->render('brochure.html.twig', [
   
        ]);
    }

    #[Route('/imprimerie/affiche', name: 'app_affiche')]
    public function affiche()
    {
        return $this->render('affiche.html.twig', [
   
        ]);
    }
    #[Route('/creativ', name: 'app_creativ')]
    public function creativ()
    {
        return $this->render('creativ.html.twig', [
   
        ]);
    }
    #[Route('/faq', name: 'app_faq')]
    public function faq()
    {
        return $this->render('faq.html.twig', [
   
        ]);
    }
    #[Route('/references', name: 'app_references')]
    public function references()
    {
        return $this->render('references.html.twig', [
   
        ]);
    }
    #[Route('/partenaires', name: 'app_partenaires')]
    public function partenaires()
    {
        return $this->render('partenaires.html.twig', [
   
        ]);
    }
    #[Route('/studio', name: 'app_studio')]
    public function studio()
    {
        return $this->render('studio.html.twig', [
   
        ]);
    }
    #[Route('/galerie/imprimerie', name: 'app_galerieimprimerie')]
    public function galerieimprimerie()
    {
        return $this->render('galerieimprimerie.html.twig', [
   
        ]);
    }
    #[Route('/galerie/site-web', name: 'app_galeriesiteweb')]
    public function galeriesiteweb()
    {
        return $this->render('galeriesiteweb.html.twig', [
   
        ]);
    }

    #[Route('/audit', name: 'app_audit')]
    public function audit()
    {
        return $this->render('audit.html.twig', [
   
        ]);
    }
    #[Route('/devis', name: 'app_devis')]
    public function devis()
    {
        return $this->render('devis.html.twig', [
   
        ]);
    }
    #[Route('/devis/site-vitrine', name: 'app_calcule_vitrine')]
    public function devisid(Request $request,$id)
    {

        return $this->render('calcules.html.twig', [
   
        ]);
    }
    #[Route('/contact', name: 'app_contact')]
    public function contact()
    {
        return $this->render('contact.html.twig', [
   
        ]);
    }
}
