import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const pages = [
  { to: "/", label: "Accueil", end: true },
  { to: "/cv", label: "Curriculum Vitae" },
  { to: "/stage", label: "Stages", stage: true },
  { to: "/ateliers-pro", label: "Ateliers Pro" },
  { to: "/projects", label: "Projets" },
  { to: "/veille", label: "Veille" },
  { to: "/competences", label: "Compétences" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Mattéo Douteaud, accueil">
          M<span>.</span>D
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="nav-list">
            {pages.map((page) => (
              <li className={`nav-item ${page.stage ? "nav-item--stage" : ""}`} key={page.to}>
                <NavLink
                  end={page.end}
                  to={page.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive || (page.stage && pathname.startsWith("/stage")) ? "active" : ""}`
                  }
                  aria-haspopup={page.stage ? "true" : undefined}
                >
                  {page.label}
                  {page.stage && <span className="nav-caret" aria-hidden="true">⌄</span>}
                </NavLink>
                {page.stage && (
                  <ul className="stage-menu">
                    <li>
                      <NavLink to="/stage/siinova">SIINOVA</NavLink>
                    </li>
                    <li>
                      <NavLink to="/stage/fabrique-numerique">
                        Fabrique Numérique
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
