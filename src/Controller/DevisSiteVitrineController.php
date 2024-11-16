<?php

namespace App\Controller;

use App\Entity\DevisSiteVitrine;
use App\Form\DevisSiteVitrineType;
use App\Repository\DevisSiteVitrineRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/devis/site/vitrine')]
final class DevisSiteVitrineController extends AbstractController
{
    #[Route(name: 'app_devis_site_vitrine_index', methods: ['GET'])]
    public function index(DevisSiteVitrineRepository $devisSiteVitrineRepository): Response
    {
        return $this->render('devis_site_vitrine/index.html.twig', [
            'devis_site_vitrines' => $devisSiteVitrineRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_devis_site_vitrine_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $devisSiteVitrine = new DevisSiteVitrine();
        $form = $this->createForm(DevisSiteVitrineType::class, $devisSiteVitrine);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($devisSiteVitrine);
            $entityManager->flush();

            return $this->redirectToRoute('app_devis_site_vitrine_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('devis_site_vitrine/new.html.twig', [
            'devis_site_vitrine' => $devisSiteVitrine,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_devis_site_vitrine_show', methods: ['GET'])]
    public function show(DevisSiteVitrine $devisSiteVitrine): Response
    {
        return $this->render('devis_site_vitrine/show.html.twig', [
            'devis_site_vitrine' => $devisSiteVitrine,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_devis_site_vitrine_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, DevisSiteVitrine $devisSiteVitrine, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(DevisSiteVitrineType::class, $devisSiteVitrine);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_devis_site_vitrine_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('devis_site_vitrine/edit.html.twig', [
            'devis_site_vitrine' => $devisSiteVitrine,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_devis_site_vitrine_delete', methods: ['POST'])]
    public function delete(Request $request, DevisSiteVitrine $devisSiteVitrine, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$devisSiteVitrine->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($devisSiteVitrine);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_devis_site_vitrine_index', [], Response::HTTP_SEE_OTHER);
    }
}
