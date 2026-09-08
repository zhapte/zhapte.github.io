import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        LL<span>.</span>
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/#work">Work</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
      </nav>

      <Link to="/#contact" className="availability">
        <span className="availability-dot" />
        Available
      </Link>
    </header>
  );
}

export default Header;