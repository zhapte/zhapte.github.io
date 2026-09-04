import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        LL<span>.</span>
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="availability">
        <span className="availability-dot" />
        Available
      </a>
    </header>
  );
}

export default Header;