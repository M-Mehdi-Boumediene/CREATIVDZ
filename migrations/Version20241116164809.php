<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241116164809 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE devis_site_vitrine (id INT AUTO_INCREMENT NOT NULL, template VARCHAR(255) DEFAULT NULL, nbpages VARCHAR(255) DEFAULT NULL, nbslides VARCHAR(255) DEFAULT NULL, administration VARCHAR(255) DEFAULT NULL, actualite VARCHAR(255) DEFAULT NULL, responsive VARCHAR(255) DEFAULT NULL, referencement VARCHAR(255) DEFAULT NULL, redaction VARCHAR(255) DEFAULT NULL, logo VARCHAR(255) DEFAULT NULL, emailing VARCHAR(255) DEFAULT NULL, paiement VARCHAR(255) DEFAULT NULL, formcomplex VARCHAR(255) DEFAULT NULL, multimedia VARCHAR(255) DEFAULT NULL, catalogue VARCHAR(255) DEFAULT NULL, reservation VARCHAR(255) DEFAULT NULL, statistiques VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE devis_site_vitrine');
    }
}
