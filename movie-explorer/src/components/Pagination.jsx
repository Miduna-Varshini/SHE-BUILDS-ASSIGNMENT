export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const last = Math.min(totalPages, 500); 
  return (
    <nav className="pagination" aria-label="Pagination">
      <button onClick={() => onChange(page - 1)} disabled={page <= 1}>Previous</button>
      <span>Page {page} of {last}</span>
      <button onClick={() => onChange(page + 1)} disabled={page >= last}>Next</button>
    </nav>
  );
}
