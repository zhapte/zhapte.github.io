import { Link } from "react-router-dom";
import "../styles/selectedWork.css";

const projects = [
  {
    number: "01",
    title: "Hauler",
    route: "/projects/hauler",
    type: "REAL-TIME / MOBILE SYSTEMS",
    description:
      "A two-sided hauling marketplace with authenticated, job-scoped real-time messaging across a React Native client and Node.js backend.",
    tags: [
      "React Native",
      "Node.js",
      "Firebase",
      "GraphQL",
      "Socket.IO",
    ],
    preview: "hauler",
    className: "project-hauler",
  },
  {
    number: "02",
    title: "Confidential Project",
    route: "/projects/confidential",
    type: "FULL-STACK / ASYNC MESSAGING",
    description:
      "A confidential full-stack platform where I contributed to persistent user-to-staff messaging, conversation search, read state, pagination, and supporting authentication workflows.",
    tags: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
      "REST API",
    ],
    preview: "confidential",
    className: "project-confidential",
  },
  {
    number: "03",
    title: "GoodBooks",
    route: "/projects/goodbooks",
    type: "OPEN SOURCE / FULL-STACK FEATURE",
    description:
      "An open-source dashboard feature implemented end-to-end across DTOs, service logic, API, MVC presentation, database-backed data, and maintainer review.",
    tags: [
      ".NET",
      "MVC",
      "REST API",
      "DTO",
      "Service Layer",
      "Database",
    ],
    preview: "goodbooks",
    className: "project-goodbooks",
    github:
      "https://github.com/medhatelmasry/GoodBooks/pull/240",
  },
];

function SelectedWork() {
  return (
    <section className="selected-work" id="work">
      <div className="selected-work-inner">
        <div className="selected-work-header">
          <div className="selected-work-index">
            <span className="section-index">01</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="selected-work-heading">
            <p>PROJECTS / CASE STUDIES</p>

            <h2>
              Selected
              <span> work.</span>
            </h2>

            <p className="selected-work-intro">
              A few projects that best represent how I approach
              software engineering across systems, full-stack
              development, and real-world product problems.
            </p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectEntry
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   PROJECT ENTRY
   ========================================================= */

function ProjectEntry({ project }) {
  return (
    <article
      className={`project-entry ${project.className}`}
    >
      {/*
        This invisible Link makes the card itself clickable.

        The action links below sit above it with a higher z-index,
        which allows GoodBooks to have its own external PR link
        without nesting links.
      */}
      <Link
        to={project.route}
        className="project-entry-main-link"
        aria-label={`View ${project.title} case study`}
      />

      <div className="project-number">
        <span>{project.number}</span>
      </div>

      <div className="project-body">
        <div className="project-copy">
          <div className="project-type">
            {project.type}
          </div>

          <h3>{project.title}</h3>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-actions">
            <Link
              to={project.route}
              className="project-link"
            >
              <span>View Case</span>
              <span aria-hidden="true">→</span>
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-github-link"
                aria-label="View GoodBooks pull request on GitHub"
              >
                <span>View PR</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="project-artifact">
          {project.preview === "hauler" && (
            <HaulerPreview />
          )}

          {project.preview === "confidential" && (
            <ConfidentialPreview />
          )}

          {project.preview === "goodbooks" && (
            <GoodBooksPreview />
          )}
        </div>
      </div>
    </article>
  );
}


/* =========================================================
   HAULER PREVIEW
   ========================================================= */

function HaulerPreview() {
  return (
    <div className="artifact artifact-hauler">
      <div className="artifact-topbar">
        <span>HAULER / SYSTEM</span>
        <span>REAL-TIME</span>
      </div>

      <div className="hauler-architecture">
        <ArchitectureNode
          label="CLIENT"
          title="React Native"
        />

        <ArchitectureConnector label="REST + TOKEN" />

        <ArchitectureNode
          label="SERVER"
          title="Express"
          accent
        />

        <div className="hauler-branches">
          <div className="hauler-branch">
            <span>GRAPHQL</span>
            <div />

            <ArchitectureNode
              label="DATA"
              title="Firebase Data Connect"
              small
            />
          </div>

          <div className="hauler-branch">
            <span>SOCKET.IO</span>
            <div />

            <ArchitectureNode
              label="LIVE"
              title="Job-Scoped Chat"
              small
            />
          </div>
        </div>
      </div>

      <div className="artifact-contribution">
        <span>MY CONTRIBUTION</span>

        <strong>
          Secure job-scoped messaging across mobile,
          backend, persistence, and socket layers.
        </strong>
      </div>

      <div className="artifact-metrics">
        <ArtifactMetric
          value="54"
          label="COMMITS"
        />

        <ArtifactMetric
          value="37"
          label="IMPLEMENTATION"
        />

        <ArtifactMetric
          value="15"
          label="CHAT COMMITS"
        />
      </div>
    </div>
  );
}


/* =========================================================
   CONFIDENTIAL PREVIEW
   ========================================================= */

function ConfidentialPreview() {
  return (
    <div className="artifact artifact-confidential">
      <div className="artifact-topbar">
        <span>RESTRICTED CASE</span>
        <span>ASYNC MESSAGING</span>
      </div>

      <div className="confidential-window">
        <div className="confidential-sidebar">
          <div className="confidential-search">
            <span />
          </div>

          <ConversationRow active />
          <ConversationRow />
          <ConversationRow />
          <ConversationRow />
        </div>

        <div className="confidential-thread">
          <div className="confidential-thread-header">
            <div>
              <span />
              <span />
            </div>

            <small>ACTIVITY</small>
          </div>

          <MessageBubble width="68%" />
          <MessageBubble
            width="54%"
            right
          />
          <MessageBubble width="76%" />

          <div className="confidential-compose">
            <span />
            <strong>→</strong>
          </div>
        </div>
      </div>

      <div className="confidential-features">
        <span>SEARCH</span>
        <span>READ STATE</span>
        <span>PAGINATION</span>
        <span>ACTIVITY</span>
      </div>

      <div className="artifact-metrics">
        <ArtifactMetric
          value="38"
          label="COMMITS"
        />

        <ArtifactMetric
          value="27"
          label="DIRECT"
        />

        <ArtifactMetric
          value="11"
          label="INTEGRATION"
        />
      </div>
    </div>
  );
}


/* =========================================================
   GOODBOOKS PREVIEW
   ========================================================= */

function GoodBooksPreview() {
  return (
    <div className="artifact artifact-goodbooks">
      <div className="artifact-topbar">
        <span>GOODBOOKS / PR #240</span>
        <span>MERGED ✓</span>
      </div>

      <div className="goodbooks-flow">
        <FlowNode
          number="01"
          label="DTO"
        />

        <FlowArrow />

        <FlowNode
          number="02"
          label="SERVICE"
        />

        <FlowArrow />

        <FlowNode
          number="03"
          label="API"
        />

        <FlowArrow />

        <FlowNode
          number="04"
          label="MVC"
        />
      </div>

      <div className="goodbooks-review">
        <div className="goodbooks-review-heading">
          <span>OPEN SOURCE CONTRIBUTION</span>
          <strong>PR #240</strong>
        </div>

        <div className="goodbooks-review-row">
          <span>FEATURE</span>
          <strong>
            Dashboard
          </strong>
        </div>

        <div className="goodbooks-review-row">
          <span>DATA</span>
          <strong>
            Database-backed
          </strong>
        </div>

        <div className="goodbooks-review-row">
          <span>REVIEW</span>
          <strong>
            Maintainer approved
          </strong>
        </div>

        <div className="goodbooks-review-row goodbooks-review-merged">
          <span>STATUS</span>
          <strong>
            MERGED ✓
          </strong>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   SMALL ARTIFACT COMPONENTS
   ========================================================= */

function ArchitectureNode({
  label,
  title,
  accent = false,
  small = false,
}) {
  return (
    <div
      className={[
        "architecture-node",
        accent
          ? "architecture-node-accent"
          : "",
        small
          ? "architecture-node-small"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{label}</span>
      <strong>{title}</strong>
    </div>
  );
}


function ArchitectureConnector({ label }) {
  return (
    <div className="architecture-connector">
      <span>{label}</span>
      <div />
    </div>
  );
}


function ArtifactMetric({
  value,
  label,
}) {
  return (
    <div className="artifact-metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}


function ConversationRow({
  active = false,
}) {
  return (
    <div
      className={`conversation-row ${
        active ? "conversation-row-active" : ""
      }`}
    >
      <span />

      <div>
        <span />
        <span />
      </div>
    </div>
  );
}


function MessageBubble({
  width,
  right = false,
}) {
  return (
    <div
      className={`message-bubble ${
        right ? "message-bubble-right" : ""
      }`}
      style={{ width }}
    >
      <span />
      <span />
    </div>
  );
}


function FlowNode({
  number,
  label,
}) {
  return (
    <div className="goodbooks-flow-node">
      <span>{number}</span>
      <strong>{label}</strong>
    </div>
  );
}


function FlowArrow() {
  return (
    <span
      className="goodbooks-flow-arrow"
      aria-hidden="true"
    >
      →
    </span>
  );
}


export default SelectedWork;