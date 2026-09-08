import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/projectPage.css";

const stack = [
  ".NET",
  "C#",
  "MVC",
  "REST API",
  "DTO",
  "Service Layer",
  "Database",
];

const featureLayers = [
  {
    number: "01",
    title: "DTO",
    description:
      "Created dashboard data-transfer objects to define the data required by the new dashboard feature.",
  },
  {
    number: "02",
    title: "SERVICE",
    description:
      "Implemented the service responsible for gathering and aggregating application data for the dashboard.",
  },
  {
    number: "03",
    title: "API",
    description:
      "Added an API endpoint that exposed the dashboard data through the application's existing backend architecture.",
  },
  {
    number: "04",
    title: "MVC DASHBOARD",
    description:
      "Built the user-facing dashboard view and connected it to the backend data flow.",
  },
];

const verificationPoints = [
  "Create invoices and confirm receivable values change.",
  "Record payments and verify the dashboard reflects the updated state.",
  "Validate payable values against underlying application data.",
  "Verify bank-related dashboard values respond to database changes.",
  "Confirm monthly activity changes as relevant records are added.",
  "Use seeded data to make dashboard behavior easier to demonstrate and test.",
];

const decisions = [
  {
    title: "Why introduce DTOs?",
    description:
      "The dashboard needed a clear data contract rather than exposing unrelated application models directly to the presentation layer. DTOs defined the information the feature actually required.",
  },
  {
    title: "Why use a service layer?",
    description:
      "Dashboard values depended on information from multiple parts of the application. Keeping aggregation logic in a service separated that work from the controller and user interface.",
  },
  {
    title: "Why verify against database state?",
    description:
      "A dashboard is only useful if its values reflect the application's real underlying state. Maintainer review specifically challenged this point, so I documented concrete scenarios for verifying that the displayed values changed with actual application data.",
  },
  {
    title: "Why add seeded data?",
    description:
      "Seeded data provided a repeatable way to exercise the dashboard during development and demonstrate how different application states affected the resulting interface.",
  },
];

function GoodBooksPage() {
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

            <span>PR #240 · 2026</span>
          </div>

          <div className="project-page-hero-grid">
            <div className="project-page-hero-main">
              <p className="project-page-eyebrow">
                OPEN SOURCE / FULL-STACK FEATURE
              </p>

              <h1>
                GoodBooks<span>.</span>
              </h1>

              <p className="project-page-lead">
                Implemented an end-to-end dashboard feature inside an existing
                open-source accounting application, from backend data contracts
                and aggregation through the API and MVC interface.
              </p>
            </div>

            <div className="project-page-hero-side">
              <div className="project-page-role">
                <span className="project-label">MY CONTRIBUTION</span>

                <p>
                  Designed the dashboard DTOs, implemented its service layer,
                  added the API endpoint, built the MVC dashboard interface,
                  and added seeded data for development and verification.
                </p>
              </div>

              <div className="project-page-hero-stack">
                {[
                  ".NET",
                  "MVC",
                  "REST API",
                  "DTO",
                  "Service Layer",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-page-metrics">
            <Metric value="4" label="FEATURE COMMITS" />
            <Metric value="HIGH" label="DIFFICULTY" />
            <Metric value="✓" label="MERGED" />

            <div className="project-page-period">
              <span>PR #240</span>
              <div />
              <span>APR 10 · 2026</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            01 / OVERVIEW
            ===================================================== */}

        <ProjectSection
          number="01"
          label="OVERVIEW"
          title="A complete feature inside someone else's codebase."
        >
          <div className="project-overview-grid">
            <div className="project-copy">
              <p>
                GoodBooks is an existing open-source accounting application.
                Rather than starting from an empty project, this contribution
                required understanding the application's existing structure and
                extending it without treating the feature as an isolated demo.
              </p>

              <p>
                My contribution implemented a new dashboard that summarized
                accounting information from the application's underlying data
                and presented it through the existing MVC interface.
              </p>
            </div>

            <div className="project-callout">
              <span className="project-label">OUTCOME</span>

              <p>
                The feature was submitted as pull request #240, reviewed by the
                project maintainer, approved, and merged into the project's
                development branch.
              </p>
            </div>
          </div>
        </ProjectSection>

        {/* =====================================================
            02 / FEATURE FLOW
            ===================================================== */}

        <ProjectSection
          number="02"
          label="FEATURE FLOW"
          title="The dashboard crossed every major application layer."
        >
          <div className="message-flow">
            <div className="message-flow-header">
              <span className="project-label">IMPLEMENTATION PATH</span>
              <span>BACKEND → INTERFACE</span>
            </div>

            <div className="message-flow-steps goodbooks-feature-flow">
              <FlowStep
                number="01"
                title="DTO"
                text="Define the data contract required by the dashboard."
              />

              <FlowStep
                number="02"
                title="SERVICE"
                text="Gather and aggregate the relevant application data."
              />

              <FlowStep
                number="03"
                title="API"
                text="Expose dashboard information through an application endpoint."
              />

              <FlowStep
                number="04"
                title="MVC"
                text="Present the resulting information through the dashboard interface."
              />
            </div>
          </div>

          <div className="project-card-grid goodbooks-layer-grid">
            {featureLayers.map((feature) => (
              <FeatureCard key={feature.number} {...feature} />
            ))}
          </div>
        </ProjectSection>

        {/* =====================================================
            03 / DASHBOARD
            ===================================================== */}

        <ProjectSection
          number="03"
          label="DASHBOARD"
          title="Database-backed information, not static demonstration values."
        >
          <div className="goodbooks-dashboard-artifact">
            <div className="goodbooks-dashboard-topbar">
              <div>
                <span className="project-label">DASHBOARD</span>
                <small>DATABASE-BACKED FEATURE</small>
              </div>

              <span className="goodbooks-pr-badge">
                PR #240
              </span>
            </div>

            <div className="goodbooks-dashboard-kpis">
              <DashboardKpi
                label="RECEIVABLES"
                width="72%"
              />

              <DashboardKpi
                label="PAYABLES"
                width="48%"
              />

              <DashboardKpi
                label="BANK"
                width="61%"
              />
            </div>

            <div className="goodbooks-dashboard-body">
              <div className="goodbooks-chart">
                <span className="project-label">
                  MONTHLY ACTIVITY
                </span>

                <div className="goodbooks-chart-bars">
                  <span style={{ height: "32%" }} />
                  <span style={{ height: "51%" }} />
                  <span style={{ height: "43%" }} />
                  <span style={{ height: "69%" }} />
                  <span style={{ height: "57%" }} />
                  <span style={{ height: "84%" }} />
                  <span style={{ height: "73%" }} />
                  <span style={{ height: "91%" }} />
                </div>
              </div>

              <div className="goodbooks-activity">
                <span className="project-label">
                  RECENT ACTIVITY
                </span>

                <ActivityRow index="01" />
                <ActivityRow index="02" />
                <ActivityRow index="03" />
                <ActivityRow index="04" />
              </div>
            </div>
          </div>

          <div className="project-copy project-copy-wide">
            <p>
              The visual above is an abstract representation rather than a
              screenshot of the original application. The important
              implementation detail was that dashboard values were derived
              from application data rather than being hard-coded into the
              interface.
            </p>
          </div>
        </ProjectSection>

        {/* =====================================================
            04 / REVIEW
            ===================================================== */}

        <ProjectSection
          number="04"
          label="MAINTAINER REVIEW"
          title="The review challenged whether the dashboard represented real data."
        >
          <div className="goodbooks-review-layout">
            <div className="goodbooks-review-summary">
              <span className="project-label">
                REVIEW → VERIFICATION
              </span>

              <h3>
                Proving the feature worked mattered as much as implementing it.
              </h3>

              <p>
                During review, the maintainer questioned whether dashboard
                values represented actual database state or were only
                demonstration data.
              </p>

              <p>
                I clarified the implementation and provided concrete scenarios
                for verifying that invoices, payments, receivables, payables,
                bank information, and monthly activity affected the dashboard.
              </p>
            </div>

            <div className="goodbooks-review-status">
              <div>
                <span>01</span>
                <small>IMPLEMENTATION</small>
                <strong>SUBMITTED</strong>
              </div>

              <div>
                <span>02</span>
                <small>MAINTAINER</small>
                <strong>REVIEWED</strong>
              </div>

              <div>
                <span>03</span>
                <small>VERIFICATION</small>
                <strong>CLARIFIED</strong>
              </div>

              <div className="goodbooks-status-merged">
                <span>04</span>
                <small>FINAL STATUS</small>
                <strong>MERGED ✓</strong>
              </div>
            </div>
          </div>
        </ProjectSection>

        {/* =====================================================
            05 / VERIFICATION
            ===================================================== */}

        <ProjectSection
          number="05"
          label="VERIFICATION"
          title="Concrete application states made the dashboard testable."
        >
          <div className="workflow-layout">
            <div className="workflow-intro">
              <span className="project-label">
                REVIEW SCENARIOS
              </span>

              <p>
                Instead of responding to review with a general claim that the
                feature was database-backed, I described specific changes that
                could be made in the application and what should subsequently
                change on the dashboard.
              </p>
            </div>

            <div className="workflow-list">
              {verificationPoints.map((point, index) => (
                <WorkflowItem
                  key={point}
                  number={String(index + 1).padStart(2, "0")}
                  text={point}
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
          title="A dashboard is more than a collection of cards."
        >
          <div className="decision-grid">
            {decisions.map((decision, index) => (
              <article
                className="decision-card"
                key={decision.title}
              >
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
          title="Four commits formed one complete vertical feature."
        >
          <div className="goodbooks-commit-list">
            <Commit
              number="01"
              label="DATA CONTRACT"
              title="Added dashboard DTOs"
            />

            <Commit
              number="02"
              label="APPLICATION LOGIC"
              title="Created the dashboard service"
            />

            <Commit
              number="03"
              label="API"
              title="Added the dashboard endpoint"
            />

            <Commit
              number="04"
              label="INTERFACE + TEST DATA"
              title="Added the view and seeded development data"
            />
          </div>

          <div className="contribution-layout goodbooks-contribution">
            <div className="contribution-metrics">
              <Metric
                value="4"
                label="FEATURE COMMITS"
                large
              />

              <Metric
                value="HIGH"
                label="DIFFICULTY"
                large
              />

              <Metric
                value="✓"
                label="APPROVED"
                large
              />

              <Metric
                value="✓"
                label="MERGED"
                large
              />
            </div>

            <div className="contribution-copy">
              <span className="project-label">
                APRIL 10 · 2026
              </span>

              <p>
                The contribution demonstrates working within an established
                open-source architecture and carrying one feature through its
                data contract, application logic, API, presentation layer,
                review, and final merge.
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
          title="Technologies and patterns used in the contribution."
        >
          <div className="project-stack-grid">
            {stack.map((item, index) => (
              <div
                className="project-stack-item"
                key={item}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </ProjectSection>

        {/* =====================================================
            END / BACK TO WORK
            ===================================================== */}

        <section className="next-project">
          <div className="next-project-index">
            <span>END OF CASE STUDIES</span>
            <span>03 / 03</span>
          </div>

          <Link
            to="/#work"
            className="next-project-link"
          >
            <div>
              <span className="project-label">
                SELECTED WORK
              </span>

              <h2>
                Back to
                <span> projects.</span>
              </h2>
            </div>

            <span
              className="next-project-arrow"
              aria-hidden="true"
            >
              ↑
            </span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   LOCAL COMPONENTS
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


function DashboardKpi({
  label,
  width,
}) {
  return (
    <div className="goodbooks-dashboard-kpi">
      <span>{label}</span>

      <div>
        <span style={{ width }} />
      </div>
    </div>
  );
}


function ActivityRow({ index }) {
  return (
    <div className="goodbooks-activity-row">
      <span>{index}</span>

      <div>
        <span />
        <span />
      </div>
    </div>
  );
}


function Commit({
  number,
  label,
  title,
}) {
  return (
    <div className="goodbooks-commit">
      <span className="goodbooks-commit-number">
        {number}
      </span>

      <div>
        <span className="project-label">
          {label}
        </span>

        <strong>{title}</strong>
      </div>

      <span className="goodbooks-commit-status">
        COMPLETE ✓
      </span>
    </div>
  );
}


export default GoodBooksPage;