import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { getMovie, IMG } from "../api/tmdb.js";
import Rating from "../components/Rating.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

export default function MovieDetails() {
  const { id } = useParams();
  const { data: movie, loading, error, retry } = useFetch((s) => getMovie(id, s), [id]);

  return (
    <>
      <Link to="/" className="back">← Back to movies</Link>
      {loading && <Loader label="Loading details" />}
      {error && <ErrorMessage message={error} onRetry={retry} />}
      {movie && !loading && (
        <article className="details">
          {IMG(movie.poster_path, "w500") ? (
            <img src={IMG(movie.poster_path, "w500")} alt={`${movie.title} poster`} />
          ) : (
            <div className="no-poster">No poster</div>
          )}
          <div>
            <h1>{movie.title}</h1>
            {movie.tagline && <p className="muted">{movie.tagline}</p>}
            <Rating value={movie.vote_average} votes={movie.vote_count} />
            <ul className="meta">
              <li>Released: {movie.release_date || "Unknown"}</li>
              {movie.runtime ? <li>Runtime: {movie.runtime} min</li> : null}
            </ul>
            <div className="tags">
              {movie.genres.map((g) => <span key={g.id} className="chip static">{g.name}</span>)}
            </div>
            <h2>Overview</h2>
            <p>{movie.overview || "No overview available."}</p>
          </div>
        </article>
      )}
    </>
  );
}
