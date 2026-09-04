import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-meta">
            <span>SOFTWARE DEVELOPER</span>
            <span>VANCOUVER, BC</span>
          </div>

          <p className="hero-eyebrow">
            BACKEND / FULL STACK / SYSTEMS
          </p>

          <h1 className="hero-title">
            Lucas
            <span> Liu.</span>
          </h1>

          <p className="hero-description">
            I build software for real users, combining backend systems,
            full-stack development, and practical problem solving.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-primary">
              View My Work
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/resume/Lucas-Liu-Resume.pdf"
              className="hero-secondary"
              download="Lucas-Liu-Resume.pdf"
            >
              Download Résumé
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/vancouver.jpeg"
            alt="Vancouver skyline and mountains"
          />

          <div className="hero-image-overlay" />

          <div className="hero-location">
            <span className="hero-location-city">
              Vancouver, BC
            </span>

            <span className="hero-location-home">
              // home
            </span>
          </div>

          <div className="hero-image-note">
            <span>PEOPLE</span>
            <span>PROBLEMS</span>
            <span>CODE</span>
            <span>BETTER SOLUTIONS</span>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#work">
        <span>SCROLL TO WORK</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}

export default Hero;