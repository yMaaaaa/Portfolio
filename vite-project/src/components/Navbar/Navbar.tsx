import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="../../app.tsx">Accueil</a>
        </li>
        <li className="nav-item">
          <a href="#about">À propos</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projets</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
