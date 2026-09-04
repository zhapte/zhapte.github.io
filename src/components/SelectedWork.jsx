import { Link } from "react-router-dom";
import "../styles/selectedWork.css";

const projects = [
  {
    number: "01",
    title: "Hauler",
    type: "REAL-TIME / MOBILE SYSTEMS",
    year: "2026",
    description:
      "Built full-stack features for a two-sided hauling marketplace, including authenticated real-time messaging and connected job workflows across the React Native client and Node.js backend.",
    tags: [
      "React Native",
      "Node.js",
      "Firebase",
      "GraphQL",
      "Socket.IO",
    ],
    route: "/projects/hauler",
    variant: "hauler",
  },
  {
    number: "02",
    title: "Confidential Project",
    type: "FULL-STACK / ASYNC MESSAGING",
    year: "2026",
    description:
      "Designed and developed parts of an asynchronous user-to-staff messaging experience for a privacy-conscious full-stack web application, with conversations persisted through a REST-backed workflow rather than real-time sockets.",
    tags: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
      "REST API",
    ],
    route: "/projects/confidential",
    variant: "confidential",
  },
  {
    number: "03",
    title: "GoodBooks",
    type: "OPEN SOURCE / FULL-STACK FEATURE",
    year: "PR #240",
    description:
      "Built an end-to-end accounting dashboard feature inside an existing open-source application, from backend data aggregation through the MVC interface.",
    tags: [
      ".NET",
      "MVC",
      "REST API",
      "DTO",
      "Service Layer",
      "Database",
    ],
    route: "/projects/goodbooks",
    variant: "goodbooks",
  },
];

function SelectedWork() {
  return (
    <section className="selected-work" id="work">
      <div className="selected-work-heading">
        <div className="selected-work-heading-main">
          <span className="section-index">01</span>
          <h2>Selected Work</h2>
        </div>

        <p>
          Projects where I contributed across real application layers — from
          interface design and workflow logic to APIs, persistence, and
          real-time systems.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectEntry key={project.route} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectEntry({ project }) {
  return (
    <article className={`project-entry project-${project.variant}`}>
      <div className="project-index">
        <span>{project.number}</span>
      </div>

      <div className="project-main">
        <div className="project-heading">
          <div>
            <span className="project-type">{project.type}</span>
            <h3>{project.title}</h3>
          </div>

          <span className="project-year">{project.year}</span>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-artifact">
          {project.variant === "hauler" && <HaulerPreview />}
          {project.variant === "confidential" && <ConfidentialPreview />}
          {project.variant === "goodbooks" && <GoodBooksPreview />}
        </div>

        <div className="project-footer">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <Link to={project.route} className="project-link">
            View Case
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function HaulerPreview() {
  return (
    <div className="hauler-preview">
      <div className="artifact-topbar">
        <span>SYSTEM FLOW</span>
        <span>REAL-TIME COMMUNICATION</span>
      </div>

      <div className="hauler-layout">
        <div className="hauler-system">
          <div className="hauler-system-row">
            <div className="system-box system-box-wide">
              <span className="system-box-label">MOBILE CLIENT</span>
              <strong>React Native</strong>
              <small>Customer / Provider</small>
            </div>
          </div>

          <div className="system-arrow">
            <span>REST + FIREBASE TOKEN</span>
          </div>

          <div className="hauler-system-row">
            <div className="system-box system-box-wide system-box-accent">
              <span className="system-box-label">APPLICATION API</span>
              <strong>Express</strong>
              <small>Auth · Jobs · Chat</small>
            </div>
          </div>

          <div className="hauler-branch">
            <div className="hauler-branch-path">
              <span className="branch-label">GRAPHQL</span>
              <span className="branch-line" />

              <div className="system-box">
                <strong>Firebase Data Connect</strong>
                <small>GraphQL Data Layer</small>
              </div>
            </div>

            <div className="hauler-branch-path">
              <span className="branch-label">SOCKET.IO</span>
              <span className="branch-line" />

              <div className="system-box">
                <strong>Live Chat</strong>
                <small>Real-Time Events</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hauler-contribution">
          <span className="artifact-eyebrow">
            PRIMARY CONTRIBUTION
          </span>

          <h4>Secure, job-scoped messaging.</h4>

          <p>
            Messages were persisted through the API first, then delivered over
            authenticated Socket.IO channels tied to accepted job assignments.
          </p>

          <div className="hauler-points">
            <span>Firebase authentication</span>
            <span>Participant authorization</span>
            <span>Persist then broadcast</span>
            <span>Query-cache updates</span>
          </div>
        </div>
      </div>

      <div className="artifact-metrics">
        <Metric value="54" label="COMMITS" />
        <Metric value="37" label="IMPLEMENTATION" />
        <Metric value="15" label="CHAT COMMITS" />

        <div className="artifact-period">
          <span>MAY 01</span>
          <div className="period-line" />
          <span>MAY 18 · 2026</span>
        </div>
      </div>
    </div>
  );
}

function ConfidentialPreview() {
  return (
    <div className="confidential-preview">
      <div className="artifact-topbar">
        <span>CONFIDENTIAL // TECHNICAL DETAILS ONLY</span>
        <span>ASYNCHRONOUS MESSAGING</span>
      </div>

      <div className="confidential-layout">
        <div className="confidential-thread">
          <div className="thread-header">
            <div>
              <span>CONVERSATION</span>
              <small>USER ↔ STAFF</small>
            </div>

            <div className="thread-search">
              <span>⌕</span>
              <span>SEARCH</span>
            </div>
          </div>

          <div className="thread-body">
            <div className="thread-message thread-message-user">
              <span className="thread-role">USER</span>

              <div className="thread-lines">
                <span />
                <span />
              </div>
            </div>

            <div className="thread-message thread-message-staff">
              <span className="thread-role">STAFF</span>

              <div className="thread-lines">
                <span />
                <span />
                <span />
              </div>

              <span className="thread-read">READ ✓</span>
            </div>

            <div className="thread-message thread-message-user thread-message-highlight">
              <span className="thread-role">USER</span>

              <div className="thread-lines">
                <span />
                <span />
              </div>

              <span className="thread-match">SEARCH MATCH</span>
            </div>
          </div>
        </div>

        <div className="confidential-details">
          <span className="artifact-eyebrow">
            MESSAGING UX + FULL STACK
          </span>

          <h4>Asynchronous user-to-staff communication.</h4>

          <p>
            Helped design and develop a persistent messaging experience where
            users could leave messages for staff to review and respond to.
            Updates were handled through REST requests rather than WebSockets
            or other real-time infrastructure.
          </p>

          <div className="confidential-feature-grid">
            <div>
              <span>01</span>
              <strong>SEARCH</strong>
              <small>Jump directly to matching messages</small>
            </div>

            <div>
              <span>02</span>
              <strong>READ STATE</strong>
              <small>Persisted timestamps and unread state</small>
            </div>

            <div>
              <span>03</span>
              <strong>PAGINATION</strong>
              <small>Consistent message ordering</small>
            </div>

            <div>
              <span>04</span>
              <strong>ACTIVITY</strong>
              <small>Recent conversations move upward</small>
            </div>
          </div>
        </div>
      </div>

      <div className="artifact-metrics">
        <Metric value="38" label="COMMITS" />
        <Metric value="27" label="DIRECT" />
        <Metric value="11" label="INTEGRATION" />

        <div className="artifact-period">
          <span>FEB</span>
          <div className="period-line" />
          <span>APR · 2026</span>
        </div>
      </div>
    </div>
  );
}

function GoodBooksPreview() {
  return (
    <div className="goodbooks-preview">
      <div className="artifact-topbar">
        <span>OPEN SOURCE CONTRIBUTION</span>

        <div className="goodbooks-status">
          <span className="status-dot" />
          <span>MERGED</span>
        </div>
      </div>

      <div className="goodbooks-layout">
        <div className="goodbooks-pipeline">
          <div className="pipeline-step">
            <span className="pipeline-number">01</span>

            <div>
              <strong>DTO</strong>
              <small>Dashboard data contracts</small>
            </div>
          </div>

          <div className="pipeline-connector" />

          <div className="pipeline-step">
            <span className="pipeline-number">02</span>

            <div>
              <strong>SERVICE</strong>
              <small>Aggregate application data</small>
            </div>
          </div>

          <div className="pipeline-connector" />

          <div className="pipeline-step">
            <span className="pipeline-number">03</span>

            <div>
              <strong>API</strong>
              <small>Dashboard endpoint</small>
            </div>
          </div>

          <div className="pipeline-connector" />

          <div className="pipeline-step pipeline-step-accent">
            <span className="pipeline-number">04</span>

            <div>
              <strong>MVC DASHBOARD</strong>
              <small>User-facing feature</small>
            </div>
          </div>
        </div>

        <div className="goodbooks-dashboard">
          <div className="dashboard-header">
            <div>
              <span>DASHBOARD</span>
              <small>DATABASE-BACKED</small>
            </div>

            <span className="dashboard-pr">PR #240</span>
          </div>

          <div className="dashboard-kpis">
            <div>
              <small>RECEIVABLES</small>
              <span />
            </div>

            <div>
              <small>PAYABLES</small>
              <span />
            </div>

            <div>
              <small>BANK</small>
              <span />
            </div>
          </div>

          <div className="dashboard-content">
            <div className="dashboard-chart">
              <span className="dashboard-label">
                MONTHLY ACTIVITY
              </span>

              <div className="chart-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="dashboard-list">
              <span className="dashboard-label">
                RECENT ACTIVITY
              </span>

              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>

      <div className="goodbooks-review">
        <div>
          <span className="artifact-eyebrow">
            MAINTAINER REVIEW
          </span>

          <p>
            Verified that dashboard values were driven by actual database state
            and provided concrete scenarios for validating invoices, payments,
            receivables, payables, and monthly chart updates.
          </p>
        </div>

        <div className="goodbooks-review-meta">
          <span>4 COMMITS</span>
          <span>DIFFICULTY: HIGH</span>
          <span>APPROVED</span>
          <span>MERGED ✓</span>
        </div>
      </div>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="artifact-metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export default SelectedWork;