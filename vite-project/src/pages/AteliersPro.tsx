import { Link } from "react-router-dom";
import "./AteliersPro.css";

const workshops = [
  {
    number: "01",
    area: "SYSTÈMES",
    title: "Administration d'un environnement Windows",
    description:
      "Installation et configuration d'un serveur Windows, gestion des comptes et groupes avec Active Directory, et partage de ressources.",
    skills: ["Windows Server", "Active Directory", "Réseau"],
  },
  {
    number: "02",
    area: "DÉVELOPPEMENT WEB",
    title: "Créer et faire évoluer un site",
    description:
      "Travail autour d'un site WordPress : structuration des pages et du contenu, personnalisation avec PHP et échanges avec une base MySQL.",
    skills: ["WordPress", "PHP", "MySQL", "HTML / CSS"],
  },
  {
    number: "03",
    area: "APPLICATION",
    title: "Boutique en ligne de matériel informatique",
    description:
      "Conception d'une application de vente avec catalogue de produits, panier et interface d'administration pour suivre les commandes.",
    skills: ["Angular", "TypeScript", "Java", "MySQL"],
  },
  {
    number: "04",
    area: "CYBERSÉCURITÉ",
    title: "Résolution de défis techniques",
    description:
      "Participation à des exercices de sécurité et d'analyse, avec une approche basée sur l'observation, la recherche et la résolution méthodique.",
    skills: ["Nmap", "Wireshark", "Kali Linux", "OSINT"],
  },
];

export default function AteliersPro() {
  return (
    <section className="page-section ateliers-page">
      <div className="page-heading">
        <p className="section-label">03 — PROJETS DE FORMATION</p>
        <h1 className="page-title">Ateliers Pro</h1>
        <p className="page-intro">
          Des mises en situation pour pratiquer le développement, les systèmes
          et la sécurité, en mobilisant les outils et méthodes vus en formation.
        </p>
      </div>

      <div className="grid-container atelier-grid">
        {workshops.map((workshop) => (
          <article className="card atelier-card" key={workshop.number}>
            <div className="atelier-card-top">
              <p className="section-label">{workshop.area}</p>
              <span>{workshop.number}</span>
            </div>
            <h2>{workshop.title}</h2>
            <p>{workshop.description}</p>
            <div className="tag-container">
              {workshop.skills.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="ateliers-callout">
        <div>
          <p className="section-label">PROJETS COMPLÉMENTAIRES</p>
          <h2>Retrouver les réalisations détaillées.</h2>
          <p>
            Le portfolio rassemble également des projets web, full-stack et
            backend réalisés au fil de mon parcours.
          </p>
        </div>
        <Link className="button-link" to="/projects">
          Voir les projets <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </section>
  );
}
