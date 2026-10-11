import "./CurriculumVitae.css";

const studies = [
  {
    period: "2025 — 2027",
    title: "BTS Services Informatiques aux Organisations",
    detail: "Option SLAM · Lycée Saint-John Perse, Pau",
  },
  {
    period: "2025",
    title: "Certification Développeur Web Full-Stack",
    detail: "Fabrique Numérique Paloise, Pau",
  },
  {
    period: "2023 — 2024",
    title: "L1 Licence LLCER",
    detail: "Langues, littératures et civilisations étrangères et régionales",
  },
  {
    period: "2022 — 2023",
    title: "L1 Licence d'informatique",
    detail: "Université de Pau et des Pays de l'Adour",
  },
  {
    period: "2022",
    title: "Baccalauréat général et technologique",
    detail: "Spécialités HGGSP, SES et HLP · Lycée Haroun Tazieff",
  },
];

export default function CurriculumVitae() {
  return (
    <section className="page-section cv-page">
      <div className="page-heading">
        <p className="section-label">01 — PARCOURS</p>
        <h1 className="page-title">Curriculum Vitae</h1>
        <p className="page-intro">
          Étudiant en BTS SIO, option SLAM, je me forme à la conception de
          logiciels et d'applications métiers après une première expérience en
          développement full-stack.
        </p>
      </div>

      <a
        className="button-link cv-download"
        href={`${import.meta.env.BASE_URL}documents/cv-matteo-douteaud.pdf`}
        download
      >
        Télécharger le CV complet <span aria-hidden="true">↓</span>
      </a>

      <div className="cv-columns">
        <section>
          <p className="section-label">FORMATION</p>
          <ol className="cv-timeline">
            {studies.map((item) => (
              <li key={item.period}>
                <span>{item.period}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="cv-side">
          <section className="card">
            <p className="section-label">EXPÉRIENCE INFORMATIQUE</p>
            <h2>SIINOVA · Pau</h2>
            <p><strong>Stage développeur junior · 5 semaines</strong></p>
            <p>
              Développement logiciel, découverte de l'embarqué et contribution
              au monitoring web d'infrastructures.
            </p>
            <p><strong>Développeur junior · contrat d'intérim · 1 mois</strong></p>
            <p>
              Développement logiciel autour d'un projet pour la Ligue Nationale
              de Volley.
            </p>
          </section>
          <section className="card">
            <p className="section-label">AUTRE EXPÉRIENCE</p>
            <h2>Oxygène Intérim · Pau</h2>
            <p><strong>Inventoriste · contrat d'intérim · 1 mois</strong></p>
            <p>Gestion des stocks et mise en place des rayons.</p>
          </section>
        </div>
      </div>

      <div className="cv-bottom-grid">
        <article className="card">
          <p className="section-label">LANGUES</p>
          <p>Français — langue maternelle</p>
          <p>Anglais — C1</p>
          <p>Espagnol — A2</p>
        </article>
        <article className="card">
          <p className="section-label">ATOUTS</p>
          <p>Esprit critique · travail en équipe · sens du service</p>
          <p>Persévérant · curieux · honnête</p>
        </article>
        <article className="card">
          <p className="section-label">INTÉRÊTS</p>
          <p>
            Musique (guitare, batterie, solfège, groupe et orchestre), jeux
            vidéo et montage de PC.
          </p>
        </article>
      </div>
      <p className="cv-contact">
        Pau ·{" "}
        <a className="text-link" href="mailto:mdouteaud.pro@gmail.com">
          mdouteaud.pro@gmail.com
        </a>
      </p>
    </section>
  );
}
