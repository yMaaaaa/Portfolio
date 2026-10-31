import { Link, useLocation } from "react-router-dom";
import "./Stage.css";

const fabriqueWorkshops = [
  {
    number: "01",
    title: "Développement d'interfaces web",
    description:
      "Conception de pages accessibles et responsive en HTML, CSS et JavaScript, puis mise en pratique avec React et TypeScript.",
    tags: ["HTML / CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    number: "02",
    title: "Applications et données",
    description:
      "Découverte du développement full-stack : structurer une application, échanger avec une base de données et organiser son code.",
    tags: ["PHP", "Node.js", "SQL", "MySQL"],
  },
  {
    number: "03",
    title: "Méthodes de travail",
    description:
      "Pratique du versioning et du travail en équipe, avec une approche progressive de la gestion de projet et de la livraison.",
    tags: ["Git", "GitHub", "Kanban", "Travail d'équipe"],
  },
];

const siinovaActivities = [
  {
    activityLabel:
      "Mettre en place et vérifier les niveaux d'habilitation associés à un service.",
    activityDetails:
      "Mise en œuvre de la fonction d'accès conditionnel requireRackAccess avec filtrage strict par rôle staff MFA ou éligibilité de l'organisation cliente.",
    skillLabel: "1.1",
    skillDetails:
      "Gestion du patrimoine informatique — Mettre en place et vérifier les niveaux d'habilitation associés à un service.",
  },
  {
    activityLabel:
      "Traiter des demandes concernant les applications / les services réseau et système.",
    activityDetails:
      "Prise en charge et implémentation complète de la demande d'évolution commerciale formulée par le tuteur pour transformer le monitoring technique en fonctionnalité client.",
    skillLabel: "1.2",
    skillDetails:
      "Réponse aux incidents et aux demandes d'assistance et d'évolution — Traiter des demandes concernant les applications / les services réseau et système.",
  },
  {
    activityLabel: "Planifier les activités.",
    activityDetails:
      "Planification fine et ordonnancement rigoureux des phases de livraison en production pour éviter l'interruption des flux d'ingestion de données.",
    skillLabel: "1.4",
    skillDetails: "Travail en mode projet — Planifier les activités.",
  },
  {
    activityLabel: "Réaliser les tests d'intégration et d'acceptation d'un service.",
    activityDetails:
      "Exécution et validation de tests de bout en bout simulant des réponses 401 et 200 sur les nouvelles routes d'API isolées.",
    skillLabel: "1.5",
    skillDetails:
      "Mise à disposition des utilisateurs d'un service informatique — Réaliser les tests d'intégration et d'acceptation d'un service.",
  },
  {
    activityLabel: "Mettre en place son environnement d'apprentissage personnel.",
    activityDetails:
      "Conception de projets d'étude personnels en langage Rust et exploration des patrons d'architecture événementielle sous Godot.",
    skillLabel: "1.6",
    skillDetails:
      "Organisation de son développement professionnel — Mettre en place son environnement d'apprentissage personnel.",
  },
  {
    activityLabel:
      "Participer à la conception de l'architecture d'une solution applicative.",
    activityDetails:
      "Élaboration d'une architecture d'ingestion décentralisée « credential-only » supprimant les clés d'accès administrateur globales sur le terrain.",
    skillLabel: "2.1",
    skillDetails:
      "Conception et développement d'une solution applicative — Participer à la conception de l'architecture d'une solution applicative.",
  },
  {
    activityLabel: "Optimisation de requêtes et indexation :",
    activityDetails:
      "Réécriture et optimisation algorithmique des fonctions de calcul de la consommation énergétique et de l'état des Mac minis. Cette refonte a permis d'éliminer les balayages complets de tables (table scans) particulièrement coûteux en ressources, en s'appuyant sur l'analyse des plans d'exécution.",
    skillLabel: "2.2",
    skillDetails: "Gestion des données — Optimisation de requêtes et indexation.",
  },
  {
    activityLabel: "Implémenter des politiques de rétention automatisées.",
    activityDetails:
      "Purge des données brutes après 7 jours pour optimiser l'espace disque. Développement d'un script d'administration de sauvegarde compressée backup.sh avec rétention des fichiers sur 30 jours, automatisé à l'échelle du système.",
    skillLabel: "2.3",
    skillDetails:
      "Gestion des données — Implémenter des politiques de rétention automatisées.",
  },
  {
    activityLabel:
      "Appliquer la réglementation en matière de collecte et de traitement.",
    activityDetails:
      "Prise de décision éthique de non-utilisation de données réelles d'entreprises clientes pour réaliser des tests, préservant la conformité au RGPD et au secret des affaires.",
    skillLabel: "3.1",
    skillDetails:
      "Protection des données à caractère personnel — Appliquer la réglementation en matière de collecte et de traitement.",
  },
  {
    activityLabel: "Gérer les accès et les privilèges appropriés.",
    activityDetails:
      "Éradication des clés à hauts privilèges service_role sur les terminaux des utilisateurs finaux et mise en place d'une isolation stricte des accès via des rôles de serveurs limités.",
    skillLabel: "3.3",
    skillDetails:
      "Sécurisation des équipements et des usages des utilisateurs — Gérer les accès et les privilèges appropriés.",
  },
  {
    activityLabel:
      "Prendre en compte la sécurité dans un projet de développement d'une solution applicative.",
    activityDetails:
      "Conception architecturale complète d'un système de limitation de requêtes par fenêtre glissante (rate-limiting) et d'un système d'alerting basé sur l'analyse automatisée des signatures de logs d'erreurs en base de données.",
    skillLabel: "3.5",
    skillDetails:
      "Cybersécurisation d'une solution applicative et de son développement — Prendre en compte la sécurité dans un projet de développement d'une solution applicative.",
  },
];

const siinovaPhotos = [
  "1000022379.jpg",
  "1000022381.jpg",
  "1000022382.jpg",
  "1000022383.jpg",
];

function StageOverview() {
  return (
    <section className="page-section stage-page">
      <div className="page-heading">
        <p className="section-label">02 — IMMERSION & FORMATION</p>
        <h1 className="page-title">Stages</h1>
        <p className="page-intro">
          Mes expériences professionnelles et de formation, du développement
          full-stack à la supervision d'infrastructures.
        </p>
      </div>
      <div className="grid-container">
        <Link className="card stage-choice" to="/stage/siinova">
          <p className="section-label">STAGE · 2026</p>
          <h2>SIINOVA</h2>
          <p>
            Cinq semaines à concevoir une solution de monitoring temps réel pour
            des racks Mac mini, du collecteur Python jusqu'à l'écran embarqué.
          </p>
          <span className="text-link">Découvrir le stage ↗</span>
        </Link>
        <Link className="card stage-choice" to="/stage/fabrique-numerique">
          <p className="section-label">FORMATION · 2025</p>
          <h2>Fabrique Numérique</h2>
          <p>
            Retour sur la certification Développeur Web Full-Stack suivie à la
            Fabrique Numérique Paloise.
          </p>
          <span className="text-link">Découvrir la formation ↗</span>
        </Link>
      </div>
    </section>
  );
}

function SiinovaStage() {
  return (
    <section className="page-section stage-page">
      <div className="page-heading">
        <p className="section-label">02 — STAGE · 25 MAI — 26 JUIN 2026</p>
        <h1 className="page-title">SIINOVA</h1>
        <p className="page-intro">
          Pendant cinq semaines (175 heures) à Pau, j'ai participé à la
          réalisation d'une solution de monitoring multi-plateforme destinée à
          rendre l'état d'un rack de Mac mini visible à distance comme sur place.
        </p>
      </div>

      <div className="stage-facts">
        <div><span>Entreprise</span><strong>SIINOVA · Pau</strong></div>
        <div><span>Projet</span><strong>Monitoring de rack Mac mini</strong></div>
        <div><span>Durée</span><strong>5 semaines · 175 h</strong></div>
        <div><span>Formation</span><strong>BTS SIO · option SLAM</strong></div>
      </div>

      <section className="stage-section">
        <p className="section-label">LE BESOIN</p>
        <h2>Superviser le matériel en temps réel.</h2>
        <p>
          Le projet consistait à agréger les indicateurs de plusieurs Mac mini
          (processeur, mémoire, GPU, consommation et activité des modèles Ollama)
          et à les rendre disponibles dans un tableau de bord ainsi que sur un
          écran tactile installé à proximité du rack.
        </p>
      </section>

      <div className="grid-container stage-missions">
        <article className="card">
          <p className="section-label">MISSION 01 · COLLECTE</p>
          <h3>Un collecteur système en Python</h3>
          <p>
            Mise en place d'un service asynchrone qui recueille les métriques
            système sur les Mac mini et transmet un flux de données structuré
            au format JSON, à une fréquence d'environ une mesure par seconde.
          </p>
          <div className="tag-container">
            {["Python", "asyncio", "psutil", "JSON", "WebSocket"].map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <article className="card">
          <p className="section-label">MISSION 02 · EMBARQUÉ</p>
          <h3>Un écran de supervision sur ESP32-S3</h3>
          <p>
            Programmation d'un afficheur tactile relié au flux temps réel.
            L'interface LVGL présente l'état du rack et ses indicateurs
            matériels sur un écran intégré.
          </p>
          <div className="tag-container">
            {["ESP32-S3", "C / C++", "LVGL", "PlatformIO", "WebSocket"].map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <article className="card">
          <p className="section-label">MISSION 03 · PLATEFORME</p>
          <h3>Des métriques jusqu'au tableau de bord</h3>
          <p>
            Évolution de l'architecture de stockage vers PostgreSQL / TimescaleDB,
            puis interconnexion avec SIINOVA Hub et Supabase. Le dashboard web
            présente les données en direct et leur historique.
          </p>
          <div className="tag-container">
            {["Next.js", "FastAPI", "Supabase", "PostgreSQL", "Docker"].map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </div>

      <section className="stage-section stage-gallery">
        <p className="section-label">EN IMAGES · ESP32-S3</p>
        <h2>Quelques vues de l'écran embarqué.</h2>
        <div className="stage-gallery-grid">
          {siinovaPhotos.map((photo, index) => (
            <figure className="stage-gallery-item" key={photo}>
              <img
                className="stage-gallery-image"
                src={`${import.meta.env.BASE_URL}images/stage/${photo}`}
                alt={`Vue ${index + 1} de l'ESP32-S3`}
                loading="lazy"
              />
              <figcaption>ESP32-S3 · vue 0{index + 1}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="stage-section stage-learning">
        <p className="section-label">CE QUE J'EN RETIENS</p>
        <h2>Un projet de bout en bout, avec de vrais enjeux d'exploitation.</h2>
        <p>
          Cette expérience m'a fait travailler sur plusieurs couches d'un même
          système : collecte asynchrone, échanges temps réel, écran embarqué,
          données historisées, déploiement Docker et intégration web. Elle m'a
          également appris à ajuster une architecture, documenter les choix et
          sécuriser les opérations d'administration, notamment avec des
          mécanismes de contrôle d'accès et de validation renforcée.
        </p>
      </section>

      <section className="stage-section stage-competencies">
        <p className="section-label">RÉFÉRENTIEL BTS SIO SLAM</p>
        <h2>Relier les activités du stage aux compétences.</h2>
        <p>
          Les activités réalisées pendant le stage sont associées aux compétences
          correspondantes du référentiel BTS SIO.
        </p>
        <div className="stage-mapping" role="table" aria-label="Activités de stage et compétences SLAM à compléter">
          <div className="stage-mapping-row stage-mapping-header" role="row">
            <span role="columnheader">Activité réalisée en stage</span>
            <span role="columnheader">Compétence(s) SLAM mobilisée(s)</span>
          </div>
          {siinovaActivities.map((activity) => (
            <div className="stage-mapping-row" role="row" key={activity.skillLabel}>
              <span role="cell">
                <span className="stage-mapping-label">{activity.activityLabel}</span>
                {activity.activityDetails}
              </span>
              <span role="cell">
                <span className="stage-competency-code">{activity.skillLabel}</span>
                {activity.skillDetails}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Link className="stage-back-link" to="/stage">
        ← Tous les stages et formations
      </Link>
    </section>
  );
}

function FabriqueStage() {
  return (
    <section className="page-section stage-page">
      <div className="page-heading">
        <p className="section-label">02 — FORMATION · 2025</p>
        <h1 className="page-title">Fabrique Numérique</h1>
        <p className="page-intro">
          La Fabrique Numérique Paloise m'a accompagné dans une formation
          intensive de cinq mois en développement web full-stack, qui a complété
          mon parcours avant le BTS SIO.
        </p>
      </div>
      <div className="stage-facts stage-facts--compact">
        <div><span>Formation</span><strong>Développeur Web Full-Stack</strong></div>
        <div><span>Année</span><strong>2025 · 5 mois</strong></div>
        <div><span>Lieu</span><strong>Pau</strong></div>
      </div>
      <div className="grid-container">
        {fabriqueWorkshops.map((workshop) => (
          <article className="card" key={workshop.number}>
            <p className="section-label">PARCOURS · {workshop.number}</p>
            <h2>{workshop.title}</h2>
            <p>{workshop.description}</p>
            <div className="tag-container">
              {workshop.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <section className="stage-section stage-learning">
        <p className="section-label">SUITE DU PARCOURS</p>
        <h2>Des acquis réinvestis en BTS SIO.</h2>
        <p>
          Cette formation m'a apporté des bases pratiques en développement
          d'applications et en gestion de projet. Je les approfondis aujourd'hui
          au lycée Saint-John Perse, dans le cadre du BTS SIO option SLAM et de
          mes expériences professionnelles.
        </p>
        <Link className="text-link" to="/cv">Consulter mon CV ↗</Link>
      </section>
      <Link className="stage-back-link" to="/stage">
        ← Tous les stages et formations
      </Link>
    </section>
  );
}

export default function Stage() {
  const { pathname } = useLocation();

  if (pathname.endsWith("/siinova")) {
    return <SiinovaStage />;
  }

  if (pathname.endsWith("/fabrique-numerique")) {
    return <FabriqueStage />;
  }

  return <StageOverview />;
}
