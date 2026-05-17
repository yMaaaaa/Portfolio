import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import { Navbar, Home, Projects, Contact, Personal, Veille } from "./exports";

function App() {
  useEffect(() => {
    emailjs.init("dXvlabuIz8Joye0NS");
  }, []);

  return (
    <Router basename="/Portfolio/">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
