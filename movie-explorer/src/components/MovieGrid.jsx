import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies }) {
  if (!movies.length) {
    return <p className="empty">No movies found. Try a different title or genre.</p>;
  }
  return (
    <div className="grid">
      {movies.map((m) => <MovieCard key={m.id} movie={m} />)}
    </div>
  );
}
