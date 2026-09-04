import "../styles/background.css";

const skills = [
  {
    label: "Languages",
    value: "JavaScript · Python · Java · C# · C · C++ · SQL · Bash",
  },
  {
    label: "Frontend",
    value: "React · React Native · HTML5 · CSS3 · Tailwind CSS",
  },
  {
    label: "Backend",
    value:
      "Node.js · Express.js · Django · FastAPI · .NET / Razor Pages · REST APIs",
  },
  {
    label: "Data",
    value: "PostgreSQL · MySQL · SQLite · Firebase / Firestore",
  },
  {
    label: "Tools",
    value:
      "Git · GitHub · Docker · Kubernetes · Linux · Playwright · Entity Framework",
  },
];

function Background() {
  return (
    <section className="background-section" id="about">
      <div className="background-inner">

        {/* Section Heading */}
        <div className="background-heading">
          <span className="section-index">03</span>
          <h2>Background</h2>
        </div>

        <div className="background-grid">

          {/* Education / Experience */}
          <div className="background-left">

            <div className="education-panel">
              <span className="background-label">
                EDUCATION
              </span>

              <h3>BCIT</h3>

              <p className="education-program">
                Computer Systems Technology
              </p>

              <p className="education-meta">
                Diploma
                <span>·</span>
                Graduated with Distinction
                <span>·</span>
                2026
              </p>

              <p className="education-description">
                Full-stack, backend, mobile, systems,
                database, and software engineering
                coursework.
              </p>
            </div>

            <div className="experience-note">
              <span className="background-label">
                PROFESSIONAL EXPERIENCE
              </span>

              <p>
                8+ years working in IT support and business
                operations, troubleshooting real systems
                and supporting day-to-day technology in a
                production environment.
              </p>
            </div>

          </div>

          {/* Technical Profile */}
          <div className="profile-panel">
            <span className="background-label">
              SYSTEM PROFILE
            </span>

            <div className="profile-list">
              {skills.map((skill) => (
                <div
                  className="profile-row"
                  key={skill.label}
                >
                  <span>{skill.label}</span>

                  <p>
                    {skill.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Background;