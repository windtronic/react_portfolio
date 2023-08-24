import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/About" className="nav-link">
        <h1 className="header-text">About Me</h1>
      </Link>

      <Link to="/Contact" className="nav-link">
        <h1 className="header-text">Contact</h1>
      </Link>

      <Link to="/Projects" className="nav-link">
        <h1 className="header-text">Projects</h1>
      </Link>
    </div>
  );
}
