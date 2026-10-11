import { Link } from "react-router-dom";
import "./Competences.css";

const domains = [
  {
    label: "01 · INTERFACES",
    title: "Développement web",
    description:
      "Concevoir et intégrer des interfaces, des sites et des applications web.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Angular", "WordPress"],
  },
  {
    label: "02 · APPLICATIONS",
    title: "Backend & données",
    description:
      "Construire la logique applicative, échanger avec les services et organiser les données.",
    skills: ["PHP", "Node.js", "Express", "Java", "SQL", "MySQL", "Supabase", "PostgreSQL"],
  },
  {
    label: "03 · ENVIRONNEMENTS",
    title: "Systèmes & outils",
    description:
      "Travailler dans un environnement de développement et collaborer sur le cycle de vie des projets.",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Jira", "Scrum", "Kanban"],
  },
  {
    label: "04 · CONCEPTION",
    title: "Analyse & sécurité",
    description:
      "Analyser un besoin, modéliser une solution et intégrer les notions de sécurité et de conformité.",
    skills: ["UML", "Merise", "RGPD", "Nmap", "Wireshark"],
  },
];

export default function Competences() {
  return (
    <section className="page-section competences-page">
      <div className="page-heading">
        <p className="section-label">05 — SAVOIR-FAIRE</p>
        <h1 className="page-title">Compétences</h1>
        <p className="page-intro">
          Un socle de compétences en développement logiciel et web, enrichi par
          la pratique des systèmes, des bases de données et du travail en mode
          projet.
        </p>
      </div>

      <div className="grid-container competence-grid">
        {domains.map((domain) => (
          <article className="card competence-card" key={domain.title}>
            <p className="section-label">{domain.label}</p>
            <h2>{domain.title}</h2>
            <p>{domain.description}</p>
            <div className="tag-container">
              {domain.skills.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="competence-note">
        <div>
          <p className="section-label">EN PRATIQUE</p>
          <h2>Les compétences se construisent dans les projets.</h2>
        </div>
        <Link className="text-link" to="/ateliers-pro">
          Voir les ateliers professionnels ↗
        </Link>
      </div>
    </section>
  );
}
