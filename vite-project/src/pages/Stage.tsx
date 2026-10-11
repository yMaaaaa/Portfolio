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
        <p className="section-label">À COMPLÉTER · RÉFÉRENTIEL BTS SIO SLAM</p>
        <h2>Relier les activités du stage aux compétences.</h2>
        <p>
          Cet espace est prévu pour associer les activités réellement réalisées
          pendant le stage aux compétences attendues du référentiel SLAM. Remplace
          les exemples ci-dessous par tes activités et les compétences
          correspondantes, en t'appuyant sur tes journaux de bord.
        </p>
        <div className="stage-mapping" role="table" aria-label="Activités de stage et compétences SLAM à compléter">
          <div className="stage-mapping-row stage-mapping-header" role="row">
            <span role="columnheader">Activité réalisée en stage</span>
            <span role="columnheader">Compétence(s) SLAM mobilisée(s)</span>
            <span role="columnheader">Preuve ou livrable</span>
          </div>
          {[1, 2, 3].map((row) => (
            <div className="stage-mapping-row" role="row" key={row}>
              <span role="cell">
                <span className="stage-placeholder-label">À REMPLACER</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span role="cell">
                <span className="stage-placeholder-label">À REMPLACER</span>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </span>
              <span role="cell">
                <span className="stage-placeholder-label">À REMPLACER</span>
                Ut enim ad minim veniam, quis nostrud exercitation.
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
