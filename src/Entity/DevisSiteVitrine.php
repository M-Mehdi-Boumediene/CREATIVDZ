<?php

namespace App\Entity;

use App\Repository\DevisSiteVitrineRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DevisSiteVitrineRepository::class)]
class DevisSiteVitrine
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $template = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nbpages = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nbslides = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $administration = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $actualite = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $responsive = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $referencement = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $redaction = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $logo = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $emailing = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $paiement = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $formcomplex = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $multimedia = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $catalogue = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $reservation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $statistiques = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $tel = null;

    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTemplate(): ?string
    {
        return $this->template;
    }

    public function setTemplate(?string $template): static
    {
        $this->template = $template;

        return $this;
    }

    public function getNbpages(): ?string
    {
        return $this->nbpages;
    }

    public function setNbpages(?string $nbpages): static
    {
        $this->nbpages = $nbpages;

        return $this;
    }

    public function getNbslides(): ?string
    {
        return $this->nbslides;
    }

    public function setNbslides(?string $nbslides): static
    {
        $this->nbslides = $nbslides;

        return $this;
    }

    public function getAdministration(): ?string
    {
        return $this->administration;
    }

    public function setAdministration(?string $administration): static
    {
        $this->administration = $administration;

        return $this;
    }

    public function getActualite(): ?string
    {
        return $this->actualite;
    }

    public function setActualite(?string $actualite): static
    {
        $this->actualite = $actualite;

        return $this;
    }

    public function getResponsive(): ?string
    {
        return $this->responsive;
    }

    public function setResponsive(?string $responsive): static
    {
        $this->responsive = $responsive;

        return $this;
    }

    public function getReferencement(): ?string
    {
        return $this->referencement;
    }

    public function setReferencement(?string $referencement): static
    {
        $this->referencement = $referencement;

        return $this;
    }

    public function getRedaction(): ?string
    {
        return $this->redaction;
    }

    public function setRedaction(?string $redaction): static
    {
        $this->redaction = $redaction;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): static
    {
        $this->logo = $logo;

        return $this;
    }

    public function getEmailing(): ?string
    {
        return $this->emailing;
    }

    public function setEmailing(?string $emailing): static
    {
        $this->emailing = $emailing;

        return $this;
    }

    public function getPaiement(): ?string
    {
        return $this->paiement;
    }

    public function setPaiement(?string $paiement): static
    {
        $this->paiement = $paiement;

        return $this;
    }

    public function getFormcomplex(): ?string
    {
        return $this->formcomplex;
    }

    public function setFormcomplex(?string $formcomplex): static
    {
        $this->formcomplex = $formcomplex;

        return $this;
    }

    public function getMultimedia(): ?string
    {
        return $this->multimedia;
    }

    public function setMultimedia(?string $multimedia): static
    {
        $this->multimedia = $multimedia;

        return $this;
    }

    public function getCatalogue(): ?string
    {
        return $this->catalogue;
    }

    public function setCatalogue(?string $catalogue): static
    {
        $this->catalogue = $catalogue;

        return $this;
    }

    public function getReservation(): ?string
    {
        return $this->reservation;
    }

    public function setReservation(?string $reservation): static
    {
        $this->reservation = $reservation;

        return $this;
    }

    public function getStatistiques(): ?string
    {
        return $this->statistiques;
    }

    public function setStatistiques(?string $statistiques): static
    {
        $this->statistiques = $statistiques;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): static
    {
        $this->tel = $tel;

        return $this;
    }
}
