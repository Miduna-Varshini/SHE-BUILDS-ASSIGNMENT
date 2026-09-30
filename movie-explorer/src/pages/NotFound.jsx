import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="empty">
      <h1>Page not found</h1>
      <Link to="/">Go back to movies</Link>
    </div>
  );
}
