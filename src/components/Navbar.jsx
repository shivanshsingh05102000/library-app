// Top navigation bar — shown on every page except the 404 screen.
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Browse Books" },
  { to: "/add", label: "Add Book" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">📚 Online Library</div>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
