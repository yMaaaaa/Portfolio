import "./Veille.css";
import { useState } from "react";

interface NewsItem {
  id: number;
  date: string;
  week: string;
  title: string;
  description: string;
  category:
    | "Framework"
    | "Performance"
    | "TypeScript"
    | "Ecosystem"
    | "Sécurité";
  icon: string;
  link?: string;
}

export default function Veille() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "31 janvier 2025",
      week: "Semaine 1",
      title: "React 19 Stable Release",
      description:
        "React 19 est officiellement stable. Cette version apporte d'importants améliorations au système de Compiler, un meilleur support des Server Components, et des optimisations significatives des performances.",
      category: "Framework",
      icon: "⚛️",
    },
    {
      id: 2,
      date: "7 février 2025",
      week: "Semaine 2",
      title: "Vite 6.0 Performance Boost",
      description:
        "Vite 6.0 arrive avec des améliorations majeures en temps de build et de HMR. Le nouvel algorithme de cache réduit les temps de rebuild jusqu'à 40%.",
      category: "Performance",
      icon: "⚡",
    },
    {
      id: 3,
      date: "14 février 2025",
      week: "Semaine 3",
      title: "TypeScript 5.4 Beta",
      description:
        "TypeScript 5.4 beta introduit l'inférence de type améliorée et le support pour les types conditionnels plus complexes. Performance du compilateur augmentée de 25%.",
      category: "TypeScript",
      icon: "📘",
    },
    {
      id: 4,
      date: "21 février 2025",
      week: "Semaine 4",
      title: "Next.js 15 Preview Annoncé",
      description:
        "Vercel annonce Next.js 15 avec App Router par défaut, amélioration des Server Components, et support natif des Web Components.",
      category: "Ecosystem",
      icon: "🚀",
    },
    {
      id: 5,
      date: "28 février 2025",
      week: "Semaine 5",
      title: "React Query v5 Release",
      description:
        "TanStack Query (anciennement React Query) v5 avec architecture interne repensée, meilleur système de caching et support amélioré des suspense boundaries.",
      category: "Ecosystem",
      icon: "🔄",
    },
    {
      id: 6,
      date: "7 mars 2025",
      week: "Semaine 6",
      title: "Sécurité: Mise à jour critique des dépendances",
      description:
        "Patch de sécurité urgent pour npm et yarn. Mise à jour recommandée pour tous les projets. Vulnérabilité RCE découverte dans les gestionnaires de packages.",
      category: "Sécurité",
      icon: "🔒",
    },
    {
      id: 7,
      date: "14 mars 2025",
      week: "Semaine 7",
      title: "Astro 4.0 Stable",
      description:
        "Astro 4.0 sort en stable avec amélioration du SSR, support des islands optionnelles, et meilleure intégration avec les frameworks front-end.",
      category: "Framework",
      icon: "🌟",
    },
    {
      id: 8,
      date: "21 mars 2025",
      week: "Semaine 8",
      title: "Angular 18 Released",
      description:
        "Angular 18 stabilise les Control Flow Syntax, améliore les signals et la réactivité. Migration facile depuis les versions antérieures.",
      category: "Framework",
      icon: "🔴",
    },
    {
      id: 9,
      date: "28 mars 2025",
      week: "Semaine 9",
      title: "Zod 4.0 Validation Update",
      description:
        "Zod 4.0 améliore la validation de schéma avec meilleurs messages d'erreur, performance accrue et nouvel ecosystem d'extensions.",
      category: "Ecosystem",
      icon: "✅",
    },
    {
      id: 10,
      date: "4 avril 2025",
      week: "Semaine 10",
      title: "React 19.1 Minor Release",
      description:
        "React 19.1 apporte des améliorations au Compiler, correction de bugs critiques et amélioration de la DX avec meilleur message d'erreurs.",
      category: "Framework",
      icon: "⚛️",
    },
    {
      id: 11,
      date: "11 avril 2025",
      week: "Semaine 11",
      title: "SvelteKit 2.0 Stable",
      description:
        "SvelteKit 2.0 est stable avec adapter officiel pour Edge Runtime, streaming amélioration et meilleure intégration avec les CDN.",
      category: "Framework",
      icon: "🔧",
    },
    {
      id: 12,
      date: "18 avril 2025",
      week: "Semaine 12",
      title: "Tailwind CSS 4.0 Preview",
      description:
        "Tailwind CSS 4.0 preview release avec CSS nesting natif, performance améliorée et support des custom CSS variables simplifié.",
      category: "Performance",
      icon: "🎨",
    },
  ];

  const categories = [
    "Tous",
    "Framework",
    "Performance",
    "TypeScript",
    "Ecosystem",
    "Sécurité",
  ];

  const filteredNews =
    selectedCategory === "Tous"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="veille-container">
      {/* Hero Section */}
      <section className="veille-hero">
        <div className="hero-blur"></div>
        <div className="veille-hero-content">
          <h1>Veille Technologique React</h1>
          <p>Actualités hebdomadaires du monde React et de l'écosystème</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="news-grid-section">
        <div className="container">
          <div className="news-grid">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className={`news-card ${expandedId === item.id ? "expanded" : ""}`}
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
              >
                <div className="news-header">
                  <div className="news-icon">{item.icon}</div>
                  <div className="news-meta">
                    <span className="news-week">{item.week}</span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <span
                    className={`news-category category-${item.category.toLowerCase()}`}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 className="news-title">{item.title}</h3>

                {expandedId === item.id && (
                  <p className="news-description">{item.description}</p>
                )}

                <div className="news-footer">
                  <span className="read-more">
                    {expandedId === item.id ? "← Réduire" : "Lire plus →"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Résumé de la veille</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{filteredNews.length}</div>
              <div className="stat-label">Articles sélectionnés</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {newsItems.filter((n) => n.category === "Framework").length}
              </div>
              <div className="stat-label">Nouvelles du Framework</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {newsItems.filter((n) => n.category === "Ecosystem").length}
              </div>
              <div className="stat-label">Ecosystème</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {newsItems.filter((n) => n.category === "Performance").length}
              </div>
              <div className="stat-label"> Optimisations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
