import { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./App.css";
import { Contact, Home, Navbar, Personal, Projects, Veille } from "./exports";
import AteliersPro from "./pages/AteliersPro";
import Competences from "./pages/Competences";
import CurriculumVitae from "./pages/CurriculumVitae";
import Stage from "./pages/Stage";
import PageMotion from "./components/PageMotion/PageMotion";

function App() {
  useEffect(() => {
    emailjs.init("dXvlabuIz8Joye0NS");
  }, []);

  return (
    <Router basename="/Portfolio/">
      <div className="app">
        <PageMotion />
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CurriculumVitae />} />
            <Route path="/stage/*" element={<Stage />} />
            <Route path="/ateliers-pro" element={<AteliersPro />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Mattéo Douteaud</span>
          <span>
            <a href="mailto:mdouteaud.pro@gmail.com">Email</a>
            {" · "}
            <Link to="/contact">Formulaire de contact</Link>
            {" · "}
            <Link to="/projects">Projets complémentaires</Link>
          </span>
        </footer>
      </div>
    </Router>
  );
}

export default App;
