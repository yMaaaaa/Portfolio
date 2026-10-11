import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealTargets = [
  ".page-heading > *",
  ".home-hero-content > *",
  ".veille-hero-content > *",
  ".projects-hero-content > *",
  ".contact-hero-content > *",
  ".personal-hero-content > *",
  ".stage-facts",
  ".stage-section",
  ".grid-container > *",
  ".home-timeline-item",
  ".home-outro > *",
  ".ateliers-callout",
  ".competence-note",
  ".cv-columns > *",
  ".cv-bottom-grid > *",
  ".news-card",
  ".stat-card",
  ".competencies-section > *",
].join(", ");

const textTargets = [
  ".home-hero-title",
  ".page-title",
  ".veille-hero-content h1",
  ".projects-hero-content h1",
  ".contact-hero-content h1",
  ".personal-hero-content h1",
].join(", ");

export default function PageMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const main = document.querySelector(".site-main");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!main || reduceMotion || !("IntersectionObserver" in window)) {
      root.classList.remove("has-scroll-reveal");
      return;
    }

    const observed = new Set<Element>();
    root.classList.add("has-scroll-reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      },
    );

    const observeTargets = (container: ParentNode) => {
      const candidates = new Set<Element>();

      if (container instanceof Element && container.matches(revealTargets)) {
        candidates.add(container);
      }

      container.querySelectorAll(revealTargets).forEach((element) => {
        candidates.add(element);
      });

      candidates.forEach((element) => {
        if (!(element instanceof HTMLElement) || observed.has(element)) {
          return;
        }

        observed.add(element);
        element.classList.add("motion-reveal");

        if (element.matches(textTargets)) {
          element.classList.add("motion-reveal--text");
        }

        const siblings = Array.from(element.parentElement?.children ?? []);
        const siblingIndex = siblings.indexOf(element);
        element.style.setProperty(
          "--motion-delay",
          `${Math.min(siblingIndex, 5) * 65}ms`,
        );
        revealObserver.observe(element);
      });
    };

    observeTargets(main);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeTargets(node);
          }
        });
      });
    });

    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      revealObserver.disconnect();
      root.classList.remove("has-scroll-reveal");
    };
  }, [pathname]);

  return null;
}
