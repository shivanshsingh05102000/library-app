// Catch-all 404 page. Intentionally rendered without the Navbar
// (it lives outside <Layout /> in App.jsx).
import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="not-found">
      <h1>404 😵</h1>
      <h2>Page Not Found!</h2>

      <p className="invalid-url">
        Invalid URL: <span>{pathname}</span>
      </p>

      <Link to="/" className="btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
