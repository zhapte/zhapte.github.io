import { useState } from "react";
import "../styles/otherWork.css";

const projects = [
  {
    number: "01",
    type: "BACKEND / AUTOMATION / FULL STACK",
    title: "Amazon Price Tracker",
    summary:
      "A multi-user Amazon price tracking application with shared price history, watchlists, target prices, email alerts, and automated product-page inspection.",
    stack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Playwright",
      "JWT",
      "REST API",
      "AWS",
    ],
    overview:
      "Users paste an Amazon product URL, add the item to a watchlist, and begin tracking its price. Price history is stored at the product level, so future users tracking the same product can see historical pricing from the time it first entered the system.",
    features: [
      "Paste an Amazon product URL to begin tracking",
      "Personal watchlists for tracked products",
      "Shared historical pricing across users",
      "Target-price configuration",
      "Email price notifications",
      "Multi-user JWT authentication",
    ],
    engineering: [
      {
        title: "PRICE HISTORY",
        text:
          "Tracked product data is shared rather than duplicated per user, allowing later users to reuse the existing historical record.",
      },
      {
        title: "BROWSER AUTOMATION",
        text:
          "Playwright was used to inspect Amazon product pages and retrieve current product pricing.",
      },
      {
        title: "RECOVERY LOGIC",
        text:
          "Built recovery handling for Amazon interruption pages by detecting the continuation control and resuming navigation automatically.",
      },
      {
        title: "API",
        text:
          "A FastAPI REST backend handles authentication, watchlists, product tracking, and persistence through PostgreSQL.",
      },
    ],
    note:
      "AWS deployment was handled by another teammate.",
  },
  {
    number: "02",
    type: "INTERNAL TOOL / WORKFLOW AUTOMATION",
    title: "Invoice & Document Manager",
    summary:
      "An internal C# tool built for ASC Collision Repair to speed up invoice entry, generate documents, and make historical invoice records easier to search and manage.",
    stack: [
      "C#",
      ".NET",
      "Entity Framework",
      "SQLite",
      "Document Generation",
      "PDF Export",
    ],
    overview:
      "Built to replace a slower manual invoice workflow with a guided console-based process. Office staff move continuously through the relevant invoice information in sequence instead of repeatedly navigating between individual form fields.",
    features: [
      "Create new invoices",
      "Manage existing invoices",
      "Search and filter historical records",
      "Customer and vendor management",
      "Automatic tax calculation",
      "Word document generation",
      "PDF export",
      "Searchable structured invoice persistence",
    ],
    engineering: [
      {
        title: "WORKFLOW DESIGN",
        text:
          "The console interface was intentionally designed around the office's real invoice-entry sequence, creating a continuous guided data-entry workflow.",
      },
      {
        title: "PERSISTENCE",
        text:
          "Entity Framework manages the persistence layer with SQLite storing structured invoice, customer, vendor, and related business data.",
      },
      {
        title: "DOCUMENT FLOW",
        text:
          "Invoice information is used to generate a Word document, which can then be exported as a PDF for business use.",
      },
      {
        title: "REAL USERS",
        text:
          "The application is used internally at ASC Collision Repair and continues to evolve as additional workflow improvements are identified.",
      },
    ],
    note:
      "Built for internal business use at ASC Collision Repair.",
  },
  {
    number: "03",
    type: "LOCAL AI / .NET",
    title: "Local AI Coding Assistant",
    summary:
      "A local ChatGPT-style coding assistant built with ASP.NET Core and Ollama, with persistent conversations and locally stored chat history.",
    stack: [
      "C#",
      "ASP.NET Core",
      "Razor Pages",
      "Ollama",
      "HttpClient",
      "EF Core",
      "SQLite",
    ],
    overview:
      "Built as a local-first coding assistant using DeepSeek Coder 6.7B through Ollama. The project focuses on understanding the underlying LLM chat workflow directly rather than hiding communication behind a third-party AI SDK.",
    features: [
      "ChatGPT-style conversational interface",
      "DeepSeek Coder 6.7B running through Ollama",
      "Persistent conversation history",
      "Multiple conversation sessions",
      "SQLite local storage",
      "Model configuration through appsettings.json",
      "Local model inference",
    ],
    engineering: [
      {
        title: "OLLAMA INTEGRATION",
        text:
          "Implemented the Ollama HTTP integration directly using HttpClient rather than relying on an Ollama SDK or higher-level AI framework.",
      },
      {
        title: "PERSISTENCE",
        text:
          "Conversation and message history is persisted locally using Entity Framework Core and SQLite.",
      },
      {
        title: "LOCAL FIRST",
        text:
          "The core chat workflow keeps model inference and conversation history on the local machine.",
      },
      {
        title: "CONFIGURATION",
        text:
          "The active Ollama model can be changed through application configuration without changing the application's integration layer.",
      },
    ],
    note:
      "Local-only by design. File uploads, repository analysis, syntax highlighting, and streaming responses are not implemented yet.",
  },
];

function OtherWork() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (number) => {
    setOpenProject((current) =>
      current === number ? null : number
    );
  };

  return (
    <section className="other-work" id="other-work">
      <div className="other-work-heading">
        <div className="other-work-heading-main">
          <span className="section-index">02</span>
          <h2>Additional Work</h2>
        </div>

        <p>
          Smaller projects focused on practical engineering problems, internal
          workflows, backend systems, and local tooling.
        </p>
      </div>

      <div className="other-work-list">
        {projects.map((project) => {
          const isOpen = openProject === project.number;

          return (
            <article
              className={`other-project ${isOpen ? "is-open" : ""}`}
              key={project.number}
            >
              <button
                className="other-project-toggle"
                type="button"
                onClick={() => toggleProject(project.number)}
                aria-expanded={isOpen}
                aria-controls={`other-project-panel-${project.number}`}
              >
                <span className="other-project-number">
                  {project.number}
                </span>

                <div className="other-project-summary">
                  <span className="other-project-type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.summary}</p>

                  <div className="other-project-stack-preview">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <span
                  className="other-project-icon"
                  aria-hidden="true"
                >
                  <span />
                  <span />
                </span>
              </button>

              <div
                className="other-project-expand"
                id={`other-project-panel-${project.number}`}
              >
                <div className="other-project-expand-inner">
                  <div className="other-project-overview">
                    <span className="other-project-label">
                      OVERVIEW
                    </span>

                    <p>{project.overview}</p>
                  </div>

                  <div className="other-project-details">
                    <div className="other-project-feature-section">
                      <span className="other-project-label">
                        WHAT IT DOES
                      </span>

                      <div className="other-project-feature-list">
                        {project.features.map((feature) => (
                          <div
                            className="other-project-feature"
                            key={feature}
                          >
                            <span>+</span>
                            <p>{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="other-project-engineering">
                      <span className="other-project-label">
                        ENGINEERING
                      </span>

                      <div className="other-project-engineering-grid">
                        {project.engineering.map((item, index) => (
                          <div
                            className="other-project-engineering-card"
                            key={item.title}
                          >
                            <span className="engineering-index">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <strong>{item.title}</strong>

                            <p>{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="other-project-bottom">
                    <div className="other-project-full-stack">
                      <span className="other-project-label">
                        STACK
                      </span>

                      <div>
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>

                    <p className="other-project-note">
                      {project.note}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OtherWork;