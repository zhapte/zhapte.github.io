import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/notFound.css";

function NotFoundPage() {
  return (
    <>
      <Header />

      <main className="not-found">
        <div className="not-found-grid">
          <div className="not-found-code" aria-hidden="true">
            <span>4</span>
            <span className="not-found-zero">0</span>
            <span>4</span>
          </div>

          <div className="not-found-content">
            <div className="not-found-meta">
              <span>ERROR / ROUTE_NOT_FOUND</span>
              <span>HTTP 404</span>
            </div>

            <p className="not-found-eyebrow">
              THIS ROUTE DOESN&apos;T EXIST
            </p>

            <h1>
              Wrong turn
              <span>.</span>
            </h1>

            <p className="not-found-description">
              The page you&apos;re looking for doesn&apos;t exist, may have
              moved, or was never part of this build.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="not-found-primary">
                Back Home
                <span aria-hidden="true">→</span>
              </Link>

              <Link to="/#work" className="not-found-secondary">
                View My Work
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="not-found-system">
            <div className="not-found-system-row">
              <span>REQUEST</span>
              <span className="not-found-system-value">
                UNKNOWN_ROUTE
              </span>
            </div>

            <div className="not-found-system-row">
              <span>STATUS</span>
              <span className="not-found-system-error">
                NOT_FOUND
              </span>
            </div>

            <div className="not-found-system-row">
              <span>RESPONSE</span>
              <span className="not-found-system-value">
                404
              </span>
            </div>

            <div className="not-found-system-row">
              <span>NEXT</span>
              <span className="not-found-system-accent">
                RETURN_HOME
              </span>
            </div>
          </div>
        </div>

        <div className="not-found-bottom">
          <span>LL / PORTFOLIO</span>

          <div className="not-found-line" />

          <span>VANCOUVER, BC</span>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFoundPage;