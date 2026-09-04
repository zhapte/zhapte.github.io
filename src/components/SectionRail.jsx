import { useEffect, useState } from "react";
import "../styles/sectionRail.css";

const sections = [
  {
    id: "work",
    number: "01",
    label: "WORK",
  },
  {
    id: "other-work",
    number: "02",
    label: "MORE",
  },
  {
    id: "about",
    number: "03",
    label: "ABOUT",
  },
  {
    id: "contact",
    number: "04",
    label: "CONTACT",
  },
];

function SectionRail() {
  const [activeSection, setActiveSection] = useState("work");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (sectionElements.length === 0) {
      return;
    }

    const handleScroll = () => {
      const workSection = document.getElementById("work");

      if (!workSection) {
        return;
      }

      const workTop = workSection.getBoundingClientRect().top;

      /*
       * Start showing the rail shortly before Selected Work
       * reaches the middle of the screen.
       */
      setIsVisible(workTop <= window.innerHeight * 0.72);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((element) => {
      observer.observe(element);
    });

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      sectionElements.forEach((element) => {
        observer.unobserve(element);
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside
      className={`section-rail ${
        isVisible ? "section-rail-visible" : ""
      }`}
      aria-label="Page sections"
    >
      <div className="section-rail-line" />

      <nav className="section-rail-nav">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`section-rail-item ${
                isActive ? "section-rail-item-active" : ""
              }`}
              aria-current={isActive ? "location" : undefined}
            >
              <span className="section-rail-marker" />

              <span className="section-rail-number">
                {section.number}
              </span>

              <span className="section-rail-label">
                {section.label}
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export default SectionRail;