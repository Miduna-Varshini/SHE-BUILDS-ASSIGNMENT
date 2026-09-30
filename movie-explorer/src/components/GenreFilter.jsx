export default function GenreFilter({ genres = [], selected, onSelect, disabled }) {
  return (
    <div className="chips" role="group" aria-label="Filter by genre">
      <button className={!selected ? "chip active" : "chip"} onClick={() => onSelect(null)} disabled={disabled}>
        All
      </button>
      {genres.map((g) => (
        <button
          key={g.id}
          className={selected === g.id ? "chip active" : "chip"}
          onClick={() => onSelect(g.id)}
          disabled={disabled}
        >
          {g.name}
        </button>
      ))}
    </div>
  );
}
