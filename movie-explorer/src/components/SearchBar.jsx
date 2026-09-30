export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label htmlFor="search" className="sr-only">Search movies</label>
      <input
        id="search"
        type="search"
        placeholder="Search for a movie title"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
