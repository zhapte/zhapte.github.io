import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/projectPage.css";

const stack = [
  "React 19",
  "React Router",
  "JavaScript",
  "Django",
  "Django REST Framework",
  "REST API",
  "PostgreSQL",
  "Django ORM",
  "Session Authentication",
  "CSRF",
  "Email OTP",
  "CSS Modules",
];

const messagingFeatures = [
  {
    number: "01",
    title: "CONVERSATION SEARCH",
    description:
      "Implemented message search that could locate matching content and jump directly to the relevant message inside a conversation.",
  },
  {
    number: "02",
    title: "READ STATE",
    description:
      "Added persisted read timestamps and unread state so the interface could distinguish between new and previously viewed conversation activity.",
  },
  {
    number: "03",
    title: "PAGINATION",
    description:
      "Worked on paginated message retrieval while maintaining consistent conversation ordering and navigation behavior.",
  },
  {
    number: "04",
    title: "ACTIVITY ORDERING",
    description:
      "Conversation activity was reflected in ordering so recently active conversations could move upward for easier access.",
  },
  {
    number: "05",
    title: "UNIFIED DETAIL VIEW",
    description:
      "Helped consolidate authenticated record details and related messaging into a more cohesive user workflow.",
  },
  {
    number: "06",
    title: "ASYNCHRONOUS BY DESIGN",
    description:
      "Messages were persisted and retrieved through REST requests. The system did not use WebSockets, SSE, or another real-time transport.",
  },
];

const authFeatures = [
  {
    number: "01",
    title: "PASSWORD",
    text:
      "The normal authentication flow established the user's initial authenticated context.",
  },
  {
    number: "02",
    title: "OTP",
    text:
      "A six-digit email verification code was generated and associated with a pending session.",
  },
  {
    number: "03",
    title: "VERIFY",
    text:
      "The backend checked expiry, failed attempts, invalidation, and successful single-use verification.",
  },
  {
    number: "04",
    title: "SESSION",
    text:
      "Successful verification completed the authentication flow and allowed the user to continue.",
  },
];

const decisions = [
  {
    title: "Why asynchronous messaging?",
    description:
      "The workflow centered on users leaving information for staff to review and respond to rather than requiring both participants to be online simultaneously. REST-backed persistence fit that interaction model without introducing unnecessary real-time infrastructure.",
  },
  {
    title: "Why persist read state?",
    description:
      "Read and unread state needed to survive navigation and new sessions. Persisting it in the application data model made conversation state consistent instead of relying only on temporary frontend state.",
  },
  {
    title: "Why build message search?",
    description:
      "Longer conversations become difficult to navigate manually. Search provided a direct path from a matching result to the relevant message while preserving the surrounding conversation context.",
  },
  {
    title: "Why add email OTP?",
    description:
      "The application handled sensitive workflows, so the authentication flow included an additional email verification step with expiration, resend behavior, failed-attempt handling, and single-use codes.",
  },
];

function ConfidentialProjectPage() {
  return (
    <>
      <Header />

      <main className="project-page">
        {/* =====================================================
            HERO
            ===================================================== */}

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
                FULL-STACK / ASYNC MESSAGING
              </p>

              <h1>
                Confidential
                <span>.</span>
              </h1>

              <p className="project-page-lead">
                Contributed to the design and development of a
                privacy-conscious full-stack web application, with a primary
                focus on persistent user-to-staff messaging, conversation
                usability, and supporting authentication workflows.
              </p>
            </div>

            <div className="project-page-hero-side">
              <div className="project-page-role">
                <span className="project-label">MY CONTRIBUTION</span>

                <p>
                  Messaging UI/UX, conversation search, read and unread state,
                  pagination, activity ordering, unified detail workflows, and
                  email OTP authentication.
                </p>
              </div>

              <div className="project-page-hero-stack">
                {[
                  "React",
                  "Django",
                  "DRF",
                  "PostgreSQL",
                  "REST API",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-page-metrics">
            <Metric value="38" label="AUTHORED COMMITS" />
            <Metric value="27" label="DIRECT CONTRIBUTIONS" />
            <Metric value="11" label="INTEGRATION" />

            <div className="project-page-period">
              <span>FEB</span>
              <div />
              <span>APR · 2026</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            01 / OVERVIEW
            ===================================================== */}

        <ProjectSection
          number="01"
          label="OVERVIEW"
          title="Sensitive workflows needed clear, persistent communication."
        >
          <div className="project-overview-grid">
            <div className="project-copy">
              <p>
                The project was a responsive full-stack web application for
                submitting, tracking, and processing sensitive records through
                authenticated workflows.
              </p>

              <p>
                Because the application is confidential, organization-specific
                details, private data, internal terminology, and screenshots
                are intentionally excluded from this case study.
              </p>
            </div>

            <div className="project-callout">
              <span className="project-label">MY SCOPE</span>

              <p>
                I contributed across the React frontend and Django backend,
                with the strongest concentration of work around the messaging
                experience and its supporting persisted state. I also
                implemented an email OTP authentication flow and contributed
                to authenticated detail-page workflows.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* =====================================================
            02 / SYSTEM
            ===================================================== */}

        <ProjectSection
          number="02"
          label="SYSTEM"
          title="A conventional full-stack architecture with deliberate boundaries."
        >
          <div className="architecture-card">
            <div className="architecture-topbar">
              <span>SYSTEM FLOW</span>
              <span>ABSTRACTED FOR CONFIDENTIALITY</span>
            </div>

            <div className="architecture-flow">
              <SystemNode
                eyebrow="WEB CLIENT"
                title="React"
                subtitle="Authenticated application UI"
              />

              <SystemArrow label="REST + SESSION / CSRF" />

              <SystemNode
                eyebrow="APPLICATION SERVER"
                title="Django / DRF"
                subtitle="Auth · Permissions · Messaging · Workflow"
                accent
              />

              <SystemArrow label="DJANGO ORM" />

              <SystemNode
                eyebrow="PERSISTENCE"
                title="PostgreSQL"
                subtitle="Application + conversation state"
              />
            </div>
          </div>

          <div className="project-copy project-copy-wide">
            <p>
              The React application communicated with Django and Django REST
              Framework through JSON REST endpoints. Django handled
              authentication, permissions, application logic, and persistence
              through the ORM and PostgreSQL.
            </p>

            <p>
              Messaging used this same request-response architecture. There
              were no WebSockets, Server-Sent Events, or Django Channels in
              the messaging implementation.
            </p>
          </div>
        </ProjectSection>

        {/* =====================================================
            03 / MESSAGING
            ===================================================== */}

        <ProjectSection
          number="03"
          label="MESSAGING"
          title="A messaging experience designed around persistence, not immediacy."
        >
          <div className="project-card-grid">
            {messagingFeatures.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>

          <div className="message-flow">
            <div className="message-flow-header">
              <span className="project-label">MESSAGE WORKFLOW</span>
              <span>ASYNCHRONOUS</span>
            </div>

            <div className="message-flow-steps">
              <FlowStep
                number="01"
                title="COMPOSE"
                text="A user creates a message within the authenticated conversation interface."
              />

              <FlowStep
                number="02"
                title="REQUEST"
                text="The React client sends the message through the REST API."
              />

              <FlowStep
                number="03"
                title="PERSIST"
                text="Django validates the request and stores the conversation state in PostgreSQL."
              />

              <FlowStep
                number="04"
                title="RETRIEVE"
                text="Conversation data is returned through paginated API requests."
              />

              <FlowStep
                number="05"
                title="UPDATE"
                text="The interface reflects message activity, ordering, and persisted read state."
              />
            </div>
          </div>
        </ProjectSection>

        {/* =====================================================
            04 / SEARCH + STATE
            ===================================================== */}

        <ProjectSection
          number="04"
          label="CONVERSATION UX"
          title="Finding the right message mattered as conversations grew."
        >
          <div className="workflow-layout">
            <div className="workflow-intro">
              <span className="project-label">SEARCH + NAVIGATION</span>

              <p>
                I helped design and implement conversation behavior beyond
                simply displaying a list of messages. Search, read state,
                pagination, and activity ordering made persisted conversations
                easier to navigate and understand.
              </p>
            </div>

            <div className="workflow-list">
              <WorkflowItem
                number="01"
                text="Search message content within a conversation."
              />

              <WorkflowItem
                number="02"
                text="Jump directly from a search result to the matching message."
              />

              <WorkflowItem
                number="03"
                text="Coordinate rendered message references when navigating to matches."
              />

              <WorkflowItem
                number="04"
                text="Persist read timestamps and unread conversation state."
              />

              <WorkflowItem
                number="05"
                text="Maintain consistent ordering while retrieving paginated messages."
              />

              <WorkflowItem
                number="06"
                text="Surface recently active conversations higher in the conversation list."
              />
            </div>
          </div>
        </ProjectSection>

        {/* =====================================================
            05 / AUTHENTICATION
            ===================================================== */}

        <ProjectSection
          number="05"
          label="AUTHENTICATION"
          title="Email OTP added another stateful workflow."
        >
          <div className="project-copy">
            <p>
              I implemented an email-based OTP flow that extended the existing
              authentication process with a pending verification state.
            </p>

            <p>
              The backend generated six-digit codes and handled expiration,
              single-use verification, invalidation, failed attempts, and
              resend behavior. The frontend provided the corresponding
              verification interface and resend cooldown.
            </p>
          </div>

          <div className="message-flow">
            <div className="message-flow-header">
              <span className="project-label">AUTH FLOW</span>
              <span>EMAIL OTP</span>
            </div>

            <div className="message-flow-steps confidential-auth-flow">
              {authFeatures.map((feature) => (
                <FlowStep
                  key={feature.number}
                  number={feature.number}
                  title={feature.title}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
        </ProjectSection>

        {/* =====================================================
            06 / ENGINEERING DECISIONS
            ===================================================== */}

        <ProjectSection
          number="06"
          label="ENGINEERING DECISIONS"
          title="Different communication problems call for different architectures."
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

        {/* =====================================================
            07 / CONTRIBUTION
            ===================================================== */}

        <ProjectSection
          number="07"
          label="CONTRIBUTION"
          title="Work across both sides of the application."
        >
          <div className="contribution-layout">
            <div className="contribution-metrics">
              <Metric value="38" label="AUTHORED COMMITS" large />
              <Metric value="27" label="DIRECT" large />
              <Metric value="11" label="INTEGRATION" large />
              <Metric value="23" label="APP / CONFIG DIRECT" large />
            </div>

            <div className="contribution-copy">
              <span className="project-label">
                FEBRUARY — APRIL · 2026
              </span>

              <p>
                My direct work touched React messaging and authentication UI,
                conversation search, unread state, routing, Django
                authentication and email behavior, DRF APIs, ORM-backed
                persistence, and supporting application configuration.
              </p>

              <p>
                These metrics describe my contribution to a collaborative
                project. They are not intended to imply sole ownership of the
                complete application.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* =====================================================
            08 / STACK
            ===================================================== */}

        <ProjectSection
          number="08"
          label="STACK"
          title="Technologies relevant to my contribution."
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

        {/* =====================================================
            NEXT
            ===================================================== */}

        <section className="next-project">
          <div className="next-project-index">
            <span>NEXT CASE</span>
            <span>03 / 03</span>
          </div>

          <Link
            to="/projects/goodbooks"
            className="next-project-link"
          >
            <div>
              <span className="project-label">
                OPEN SOURCE / FULL-STACK FEATURE
              </span>

              <h2>
                GoodBooks<span>.</span>
              </h2>
            </div>

            <span
              className="next-project-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   SHARED LOCAL COMPONENTS
   ========================================================= */

function ProjectSection({
  number,
  label,
  title,
  children,
}) {
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

function Metric({
  value,
  label,
  large = false,
}) {
  return (
    <div
      className={`project-metric ${
        large ? "project-metric-large" : ""
      }`}
    >
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
}) {
  return (
    <div
      className={`system-node ${
        accent ? "system-node-accent" : ""
      }`}
    >
      {eyebrow && (
        <span className="system-node-eyebrow">
          {eyebrow}
        </span>
      )}

      <strong>{title}</strong>
      <small>{subtitle}</small>
    </div>
  );
}

function SystemArrow({ label }) {
  return (
    <div className="system-arrow">
      <span>{label}</span>
      <div />
    </div>
  );
}

function FeatureCard({
  number,
  title,
  description,
}) {
  return (
    <article className="project-feature-card">
      <span className="project-feature-number">
        {number}
      </span>

      <strong>{title}</strong>
      <p>{description}</p>
    </article>
  );
}

function FlowStep({
  number,
  title,
  text,
}) {
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

function WorkflowItem({
  number,
  text,
}) {
  return (
    <div className="workflow-item">
      <span>{number}</span>
      <p>{text}</p>
    </div>
  );
}

export default ConfidentialProjectPage;