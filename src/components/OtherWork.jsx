import "../styles/otherWork.css";

const otherProjects = [
  {
    number: "01",
    category: "BACKEND / PERSONAL",
    title: "Amazon Price Tracker",
    stack: "FastAPI · PostgreSQL · Playwright · JWT · REST APIs",
  },
  {
    number: "02",
    category: "DESKTOP / BUSINESS",
    title: "Invoice & Document Manager",
    stack: "C# · .NET · Entity Framework · SQLite",
  },
  {
    number: "03",
    category: "LOCAL AI",
    title: "Local AI Coding Assistant",
    stack: ".NET Razor Pages · Ollama · Local Storage",
  },
];

function OtherWork() {
  return (
    <section className="other-work" id="other-work">
      <div className="other-work-inner">
        <div className="other-work-heading">
          <span className="section-index">02</span>

          <div>
            <h2>Other Work</h2>

            <p>
              Smaller projects exploring backend systems, automation,
              desktop software, and local AI.
            </p>
          </div>
        </div>

        <div className="other-work-list">
          {otherProjects.map((project) => (
            <article
              className="other-work-item"
              key={project.title}
            >
              <span className="other-work-number">
                {project.number}
              </span>

              <div className="other-work-main">
                <span className="other-work-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>
              </div>

              <p className="other-work-stack">
                {project.stack}
              </p>

              <span
                className="other-work-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherWork;