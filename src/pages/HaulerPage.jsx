import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/projectPage.css";

const stack = [
  "React Native",
  "Expo",
  "Expo Router",
  "TypeScript",
  "Node.js",
  "Express",
  "REST API",
  "Firebase Authentication",
  "Firebase Data Connect",
  "GraphQL",
  "PostgreSQL",
  "Socket.IO",
  "TanStack Query",
  "Zustand",
  "Jest",
  "Supertest",
];

const messagingPoints = [
  {
    number: "01",
    title: "AUTHENTICATED CONNECTIONS",
    description:
      "Socket.IO connections were authenticated using Firebase ID tokens. The server verified each token before associating the authenticated user with the socket connection.",
  },
  {
    number: "02",
    title: "PARTICIPANT AUTHORIZATION",
    description:
      "Before joining a conversation room, the backend checked the related job assignment and verified that the authenticated user was either the customer or the accepted service provider.",
  },
  {
    number: "03",
    title: "JOB-SCOPED ROOMS",
    description:
      "Conversation rooms were tied to accepted job assignments so messaging remained connected to the actual marketplace workflow rather than existing as a separate generic chat system.",
  },
  {
    number: "04",
    title: "PERSIST THEN BROADCAST",
    description:
      "Messages were persisted through the application API before a Socket.IO event was emitted, keeping stored conversation state authoritative before clients received the real-time update.",
  },
  {
    number: "05",
    title: "CLIENT CACHE UPDATES",
    description:
      "Incoming socket events updated TanStack Query caches on the React Native client so inboxes and active conversations could reflect new messages without requiring a full reload.",
  },
  {
    number: "06",
    title: "LIFECYCLE-AWARE CHAT",
    description:
      "Messaging followed the job lifecycle: accepted assignments could communicate, completed jobs moved into archived conversations, and the interface exposed relevant job context such as titles and prices.",
  },
];

const workflowPoints = [
  "Connected accepted offers to job-specific conversations.",
  "Improved customer and provider inbox experiences.",
  "Archived conversations associated with completed jobs.",
  "Added job titles, prices, and navigation context to conversation views.",
  "Fixed provider My Jobs rendering and filtering behavior.",
  "Improved accepted-offer presentation and contact flows.",
  "Prevented invalid post edits after an offer had been accepted.",
  "Expired incompatible pending offers when relevant job details changed.",
];

const decisions = [
  {
    title: "Why persist before broadcasting?",
    description:
      "The real-time event represents a message that already exists in persistent application state. Persisting first reduces the chance of clients displaying a message that later fails to save.",
  },
  {
    title: "Why authorize room membership?",
    description:
      "Authentication alone proves who the user is. The room-join check also verifies that the user belongs to the specific accepted job assignment before allowing access to that conversation.",
  },
  {
    title: "Why scope chat to accepted assignments?",
    description:
      "The marketplace already had a job and offer lifecycle. Tying conversations to accepted assignments kept messaging consistent with that business state and prevented unrelated users from creating arbitrary chat relationships.",
  },
  {
    title: "Why use both REST and Socket.IO?",
    description:
      "REST remained responsible for authenticated application operations and persistence, while Socket.IO handled immediate delivery of events. The two paths had distinct responsibilities rather than duplicating each other.",
  },
];

function HaulerPage() {
  return (
    <>
      <Header />

      <main className="project-page">
        <section className="project-page-hero">
          <div className="project-page-hero-meta">
            <Link to="/#work" className="project-back-link">
              <span aria-hidden="true">←</span>
              Selected Work
            </Link>

            <span>2026</span>
          </div>

          <div className="project-page-hero-grid">
            <div className="project-page-hero-main">
              <p className="project-page-eyebrow">
                REAL-TIME / MOBILE SYSTEMS
              </p>

              <h1>
                Hauler<span>.</span>
              </h1>

              <p className="project-page-lead">
                A two-sided hauling marketplace where I contributed full-stack
                features across the React Native client and Node.js backend,
                with a primary focus on authenticated real-time messaging and
                connected job workflows.
              </p>
            </div>

            <div className="project-page-hero-side">
              <div className="project-page-role">
                <span className="project-label">MY CONTRIBUTION</span>

                <p>
                  Real-time chat, mobile/API integration, job and offer
                  lifecycle improvements, authentication-aware routing, and
                  supporting backend operations.
                </p>
              </div>

              <div className="project-page-hero-stack">
                {[
                  "React Native",
                  "Node.js",
                  "Firebase",
                  "GraphQL",
                  "Socket.IO",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-page-metrics">
            <Metric value="54" label="AUTHORED COMMITS" />
            <Metric value="37" label="DIRECT IMPLEMENTATION" />
            <Metric value="15" label="CHAT COMMITS" />

            <div className="project-page-period">
              <span>MAY 01</span>
              <div />
              <span>MAY 18 · 2026</span>
            </div>
          </div>
        </section>

        <ProjectSection
          number="01"
          label="OVERVIEW"
          title="A marketplace built around real job workflows."
        >
          <div className="project-overview-grid">
            <div className="project-copy">
              <p>
                Hauler is a cross-platform marketplace that connects customers
                who need hauling work completed with service providers who can
                browse jobs and submit offers.
              </p>

              <p>
                The larger application supports role-based onboarding, job
                postings, offers, accepted assignments, messaging, reviews,
                file uploads, and payment-related workflows.
              </p>
            </div>

            <div className="project-callout">
              <span className="project-label">MY SCOPE</span>

              <p>
                My work crossed both the React Native client and Express
                backend. The largest area was building and integrating secure,
                job-scoped real-time messaging, alongside improvements to the
                job and offer lifecycle surrounding it.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection
          number="02"
          label="SYSTEM"
          title="REST for application state. Socket.IO for live delivery."
        >
          <div className="architecture-card">
            <div className="architecture-topbar">
              <span>SYSTEM FLOW</span>
              <span>SIMPLIFIED ARCHITECTURE</span>
            </div>

            <div className="architecture-flow">
              <SystemNode
                eyebrow="MOBILE CLIENT"
                title="React Native"
                subtitle="Customer / Provider"
              />

              <SystemArrow label="REST + FIREBASE AUTH" />

              <SystemNode
                eyebrow="APPLICATION API"
                title="Express"
                subtitle="Auth · Jobs · Offers · Chat"
                accent
              />

              <div className="architecture-branches">
                <div className="architecture-branch">
                  <span className="architecture-branch-label">GRAPHQL</span>
                  <div className="architecture-branch-line" />

                  <SystemNode
                    title="Firebase Data Connect"
                    subtitle="GraphQL-backed data operations"
                    compact
                  />

                  <SystemArrow label="POSTGRESQL" compact />

                  <SystemNode
                    title="Relational Data"
                    subtitle="Cloud SQL / PostgreSQL"
                    compact
                  />
                </div>

                <div className="architecture-branch">
                  <span className="architecture-branch-label">SOCKET.IO</span>
                  <div className="architecture-branch-line" />

                  <SystemNode
                    title="Authenticated Rooms"
                    subtitle="Job-scoped real-time events"
                    compact
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="project-copy project-copy-wide">
            <p>
              The React Native client primarily communicated with the Express
              server through REST. Server-side operations then used Firebase
              Data Connect GraphQL operations for application data backed by
              PostgreSQL.
            </p>

            <p>
              Socket.IO ran alongside that request-response flow. It handled
              immediate event delivery for chat while authenticated API
              operations remained responsible for authorization, validation,
              and persistence.
            </p>
          </div>
        </ProjectSection>

        <ProjectSection
          number="03"
          label="REAL-TIME MESSAGING"
          title="Secure messaging tied directly to accepted jobs."
        >
          <div className="project-card-grid">
            {messagingPoints.map((point) => (
              <FeatureCard key={point.number} {...point} />
            ))}
          </div>

          <div className="message-flow">
            <div className="message-flow-header">
              <span className="project-label">MESSAGE DELIVERY</span>
              <span>SIMPLIFIED</span>
            </div>

            <div className="message-flow-steps">
              <FlowStep
                number="01"
                title="SEND"
                text="Client submits an approved message through the authenticated API."
              />

              <FlowStep
                number="02"
                title="VERIFY"
                text="Backend verifies the user, assignment membership, sender role, and active job state."
              />

              <FlowStep
                number="03"
                title="PERSIST"
                text="Message and conversation metadata are written through the server data layer."
              />

              <FlowStep
                number="04"
                title="BROADCAST"
                text="Socket.IO emits the created message to the authorized conversation and recipient channels."
              />

              <FlowStep
                number="05"
                title="SYNC"
                text="React Native updates TanStack Query caches for the active conversation and inbox."
              />
            </div>
          </div>
        </ProjectSection>

        <ProjectSection
          number="04"
          label="JOB WORKFLOWS"
          title="Chat was only one part of the state that had to stay consistent."
        >
          <div className="workflow-layout">
            <div className="workflow-intro">
              <p>
                The messaging experience depended on the surrounding
                marketplace state being correct. I also worked on job, offer,
                assignment, and navigation behavior that connected those
                workflows together.
              </p>
            </div>

            <div className="workflow-list">
              {workflowPoints.map((item, index) => (
                <div className="workflow-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ProjectSection>

        <ProjectSection
          number="05"
          label="ENGINEERING DECISIONS"
          title="The important part wasn't only making chat work."
        >
          <div className="decision-grid">
            {decisions.map((decision, index) => (
              <article className="decision-card" key={decision.title}>
                <span className="decision-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{decision.title}</h3>

                <p>{decision.description}</p>
              </article>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection
          number="06"
          label="CONTRIBUTION"
          title="A concentrated implementation period across multiple application layers."
        >
          <div className="contribution-layout">
            <div className="contribution-metrics">
              <Metric value="54" label="AUTHORED COMMITS" large />
              <Metric value="37" label="DIRECT IMPLEMENTATION" large />
              <Metric value="17" label="MERGE / INTEGRATION" large />
              <Metric value="15" label="CHAT-FOCUSED" large />
            </div>

            <div className="contribution-copy">
              <span className="project-label">MAY 01 — MAY 18 · 2026</span>

              <p>
                My direct implementation work touched the mobile client,
                Express routes, authentication, Socket.IO integration,
                GraphQL-backed server operations, job and offer workflows,
                query-cache behavior, and automated backend tests.
              </p>

              <p>
                The commit totals are included as contribution evidence, not as
                a claim that I built the entire application independently.
                Hauler was a collaborative capstone project.
              </p>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection
          number="07"
          label="STACK"
          title="Technologies used across the system."
        >
          <div className="project-stack-grid">
            {stack.map((item, index) => (
              <div className="project-stack-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </ProjectSection>

        <section className="next-project">
          <div className="next-project-index">
            <span>NEXT CASE</span>
            <span>02 / 03</span>
          </div>

          <Link to="/projects/confidential" className="next-project-link">
            <div>
              <span className="project-label">
                FULL-STACK / ASYNC MESSAGING
              </span>

              <h2>
                Confidential
                <span> Project.</span>
              </h2>
            </div>

            <span className="next-project-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ProjectSection({ number, label, title, children }) {
  return (
    <section className="project-section">
      <div className="project-section-index">
        <span>{number}</span>
        <span>{label}</span>
      </div>

      <div className="project-section-content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Metric({ value, label, large = false }) {
  return (
    <div className={`project-metric ${large ? "project-metric-large" : ""}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function SystemNode({
  eyebrow,
  title,
  subtitle,
  accent = false,
  compact = false,
}) {
  return (
    <div
      className={[
        "system-node",
        accent ? "system-node-accent" : "",
        compact ? "system-node-compact" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && <span className="system-node-eyebrow">{eyebrow}</span>}
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </div>
  );
}

function SystemArrow({ label, compact = false }) {
  return (
    <div
      className={`system-arrow ${
        compact ? "system-arrow-compact" : ""
      }`}
    >
      <span>{label}</span>
      <div />
    </div>
  );
}

function FeatureCard({ number, title, description }) {
  return (
    <article className="project-feature-card">
      <span className="project-feature-number">{number}</span>
      <strong>{title}</strong>
      <p>{description}</p>
    </article>
  );
}

function FlowStep({ number, title, text }) {
  return (
    <div className="message-flow-step">
      <span>{number}</span>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default HaulerPage;