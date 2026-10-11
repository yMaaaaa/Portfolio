import { Link } from "react-router-dom";
import "./Home.css";

const milestones = [
  {
    date: "2025 — 2027",
    title: "BTS SIO · option SLAM",
    detail: "Lycée Saint-John Perse, Pau",
  },
  {
    date: "2025",
    title: "Développeur Web Full-Stack",
    detail: "Certification — Fabrique Numérique Paloise",
  },
  {
    date: "2023 — 2024",
    title: "Licence LLCER",
    detail: "Langues, littératures et civilisations étrangères",
  },
  {
    date: "2022 — 2023",
    title: "Licence d'informatique",
    detail: "Université de Pau et des Pays de l'Adour",
  },
];

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="home-orb home-orb-one" aria-hidden="true" />
        <div className="home-orb home-orb-two" aria-hidden="true" />
        <div className="home-hero-content">
          <p className="section-label">PORTFOLIO · BTS SIO SLAM</p>
          <h1 className="home-hero-title">
            DOUTEAUD
            <br />
            <span>Mattéo</span>
            <br />
          </h1>
          <div className="home-hero-bottom">
            <p>
              Actuellement étudiant en deuxième année en développement informatique à
              Pau, j'aime concevoir des applications utiles, de l'interface
              jusqu'aux services qui la font fonctionner.
            </p>
            <Link className="button-link" to="/cv">
              Découvrir mon parcours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <p className="home-hero-note">DÉVELOPPEMENT · SYSTÈMES · CURIOSITÉ</p>
      </section>

      <section className="home-overview page-section">
        <div className="page-heading">
          <p className="section-label">À PROPOS</p>
          <h2 className="page-title">Un parcours entre code et terrain.</h2>
          <p className="page-intro">
            Formé au développement web full-stack et actuellement en BTS SIO,
            option SLAM, je développe mes compétences à travers les projets de
            formation et les expériences en entreprise.
          </p>
        </div>
        <div className="home-highlight-grid">
          <article className="card">
            <span className="home-card-index">01</span>
            <p className="section-label">EXPÉRIENCE</p>
            <h3>Un système de monitoring complet</h3>
            <p>
              Chez SIINOVA, j'ai contribué à une solution de supervision de
              racks Mac mini : collecte de métriques, affichage web et écran
              embarqué connecté.
            </p>
            <Link className="text-link" to="/stage/siinova">
              Explorer le stage
            </Link>
          </article>
          <article className="card">
            <span className="home-card-index">02</span>
            <p className="section-label">APPROCHE</p>
            <h3>Apprendre en construisant</h3>
            <p>
              Développement web, bases de données, systèmes et cybersécurité :
              chaque projet est l'occasion de tester, documenter et progresser.
            </p>
            <Link className="text-link" to="/ateliers-pro">
              Voir les ateliers
            </Link>
          </article>
        </div>
      </section>

      <section className="home-path page-section">
        <div className="page-heading">
          <p className="section-label">FORMATION</p>
          <h2 className="page-title">Les étapes de mon parcours.</h2>
        </div>
        <ol className="home-timeline">
          {milestones.map((milestone) => (
            <li className="home-timeline-item" key={milestone.date}>
              <span className="home-timeline-date">{milestone.date}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-outro">
        <p className="section-label">POUR ALLER PLUS LOIN</p>
        <h2>Curieux de découvrir mon travail&nbsp;?</h2>
        <div className="home-outro-links">
          <Link className="button-link" to="/competences">
            Mes compétences <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button-link" to="/veille">
            Ma veille <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
