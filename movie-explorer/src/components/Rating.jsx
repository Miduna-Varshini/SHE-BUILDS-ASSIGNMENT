// Displays a TMDB score (0-10) as a star + number.
export default function Rating({ value, votes }) {
  if (!value) return <span className="rating muted">Not rated</span>;
  return (
    <span className="rating" aria-label={`Rated ${value.toFixed(1)} out of 10`}>
      <span aria-hidden="true">★</span> {value.toFixed(1)}
      {votes ? <small> ({votes.toLocaleString()} votes)</small> : null}
    </span>
  );
}
