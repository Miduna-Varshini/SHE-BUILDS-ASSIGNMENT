import { Link } from "react-router-dom";
import { IMG } from "../api/tmdb.js";
import Rating from "./Rating.jsx";

export default function MovieCard({ movie }) {
  const poster = IMG(movie.poster_path);
  const year = movie.release_date?.slice(0, 4);
  return (
    <Link to={`/movie/${movie.id}`} className="card">
      {poster ? (
        <img src={poster} alt={`${movie.title} poster`} loading="lazy" />
      ) : (
        <div className="no-poster">No poster</div>
      )}
      <div className="card-body">
        <h3>{movie.title}</h3>
        <p className="muted">{year || "Release date unknown"}</p>
        <Rating value={movie.vote_average} />
      </div>
    </Link>
  );
}
