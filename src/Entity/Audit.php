<?php

namespace App\Entity;

use App\Repository\AuditRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AuditRepository::class)]
class Audit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $logo = null;

    #[ORM\Column(length: 255)]
    private ?string $slogan = null;

    #[ORM\Column(length: 255)]
    private ?string $siteweb = null;

    #[ORM\Column(length: 255)]
    private ?string $charte = null;

    #[ORM\Column(length: 255)]
    private ?string $cartes = null;

    #[ORM\Column(length: 255)]
    private ?string $prospectus = null;

    #[ORM\Column(length: 255)]
    private ?string $publicite = null;

    #[ORM\Column(length: 255)]
    private ?string $serigraphie = null;

    #[ORM\Column(length: 255)]
    private ?string $signalise = null;

    #[ORM\Column(length: 255)]
    private ?string $foirs = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $tel = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): static
    {
        $this->logo = $logo;

        return $this;
    }

    public function getSlogan(): ?string
    {
        return $this->slogan;
    }

    public function setSlogan(string $slogan): static
    {
        $this->slogan = $slogan;

        return $this;
    }

    public function getSiteweb(): ?string
    {
        return $this->siteweb;
    }

    public function setSiteweb(string $siteweb): static
    {
        $this->siteweb = $siteweb;

        return $this;
    }

    public function getCharte(): ?string
    {
        return $this->charte;
    }

    public function setCharte(string $charte): static
    {
        $this->charte = $charte;

        return $this;
    }

    public function getCartes(): ?string
    {
        return $this->cartes;
    }

    public function setCartes(string $cartes): static
    {
        $this->cartes = $cartes;

        return $this;
    }

    public function getProspectus(): ?string
    {
        return $this->prospectus;
    }

    public function setProspectus(string $prospectus): static
    {
        $this->prospectus = $prospectus;

        return $this;
    }

    public function getPublicite(): ?string
    {
        return $this->publicite;
    }

    public function setPublicite(string $publicite): static
    {
        $this->publicite = $publicite;

        return $this;
    }

    public function getSerigraphie(): ?string
    {
        return $this->serigraphie;
    }

    public function setSerigraphie(string $serigraphie): static
    {
        $this->serigraphie = $serigraphie;

        return $this;
    }

    public function getSignalise(): ?string
    {
        return $this->signalise;
    }

    public function setSignalise(string $signalise): static
    {
        $this->signalise = $signalise;

        return $this;
    }

    public function getFoirs(): ?string
    {
        return $this->foirs;
    }

    public function setFoirs(string $foirs): static
    {
        $this->foirs = $foirs;

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
