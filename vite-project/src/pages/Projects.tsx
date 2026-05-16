import "./Projects.css";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const projects: Project[] = [
    {
      title: "Gestion d'un Serveur Windows",
      description:
        "Installation, configuration et maintenance d'un serveur Windows pour la gestion des utilisateurs, des groupes, et des ressources partagées avec Active Directory.",
      technologies: ["Windows Server", "Maintenance", "Configuration", "UI/UX"],
      category: "Système",
      icon: "🖥️",
    },
    {
      title: "Site CV en ligne",
      description:
        "Site crée pour présenter mon parcours, mes compétences et mes projets. Design moderne, responsive et optimisé pour une expérience utilisateur fluide.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Frontend",
      icon: "🎯",
    },
    {
      title: "Création d'un site et gestion de celui-ci",
      description:
        "Developpement d'un site web complet avec wordpress, gestion du contenu, relation avec une base de données MySQL, intégrant du php.",
      technologies: ["WordPress", "HTML5", "CSS3", "PHP", "MySQL"],
      category: "Full Stack",
      icon: "🌐",
    },
    {
      title: "Site de vente de produits hardware en ligne",
      description:
        "Application de vente en ligne pour une boutique de matériel informatique, avec gestion des produits, panier d'achat, et interface d'administration pour la gestion des commandes.",
      technologies: ["Angular", "TypeScript", "Java", "MySQL"],
      category: "Full Stack",
      icon: "🛒",
    },
    {
      title: "Portfolio Personnel - v1",
      description:
        "Premier portfolio avec design moderne, animation fluides et responsive design. Intégration avec formsubmit pour le contact direct et déploiement sur GitHub Pages.",
      technologies: ["React", "CSS3", "Vite", "GitHub Pages"],
      category: "Frontend",
      icon: "⭐",
    },
    {
      title: "API RESTful E-commerce",
      description:
        "Architecture backend complète pour plateforme e-commerce avec authentification JWT, et système de notification par email.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      category: "Backend",
      icon: "💳",
    },
    {
      title: "Top 114/812 Passtonhack 2025/2026 + Top 10% TryHackMe",
      description:
        "Accomplissement de défis de cybersécurité sur les plateformes Passtonhack (21/22) et TryHackMe, démontrant des compétences avancées en sécurité informatique et en résolution de problèmes complexes.",
      technologies: [
        "Kali Linux",
        "Wireshark",
        "Metasploit",
        "Nmap",
        "Hydra",
        "OSINT",
        "Reverse Engineering",
        "Cryptographie",
      ],
      category: "Cybersécurité",
      icon: "🔒",
    },
  ];

  const categories = [
    "Tous",
    "Frontend",
    "Backend",
    "Full Stack",
    "Système",
    "Cybersécurité",
  ];

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const competencies = [
    {
      title: "Support IT",
      emoji: "🖥️",
      description: "Gestion d'actifs, support utilisateur, incidents",
    },
    {
      title: "Développement Web",
      emoji: "💻",
      description: "Conception et développement d'applications modernes",
    },
    {
      title: "Architecture",
      emoji: "🏗️",
      description: "Design scalable et bonnes pratiques",
    },
    {
      title: "Base de Données",
      emoji: "🗄️",
      description: "MySQL, PostgreSQL, optimisation requêtes",
    },
  ];

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="hero-blur"></div>
        <div className="projects-hero-content">
          <h1>Mes Réalisations</h1>
          <p>Découvrez les projets que j'ai développés pendant ma formation</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="project-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-techs">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="category-badge">{project.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="competencies-section">
        <div className="container">
          <h2>Domaines de Compétences</h2>
          <div className="competencies-grid">
            {competencies.map((comp, idx) => (
              <div key={idx} className="competency-item">
                <div className="comp-icon">{comp.emoji}</div>
                <h3>{comp.title}</h3>
                <p>{comp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="cta-content">
          <h2>Intéressé par un projet similaire?</h2>
          <p>Je suis toujours ouvert à de nouveaux défis et opportunités</p>
          <a href="/contact" className="cta-button primary">
            Commençons ensemble
          </a>
        </div>
      </section>
    </div>
  );
}
