import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import useDebounce from "../hooks/useDebounce.js";
import { getPopular, searchMovies, discoverByGenre, getGenres } from "../api/tmdb.js";
import SearchBar from "../components/SearchBar.jsx";
import GenreFilter from "../components/GenreFilter.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import Pagination from "../components/Pagination.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

export default function Home() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState(null);
  const [page, setPage] = useState(1);
  const debouncedQuery = useDebounce(query.trim(), 500);

  useEffect(() => setPage(1), [debouncedQuery, genre]);

  const { data: genreData } = useFetch((signal) => getGenres(signal), []);

  const { data, loading, error, retry } = useFetch(
    (signal) => {
      if (debouncedQuery) return searchMovies(debouncedQuery, page, signal);
      if (genre) return discoverByGenre(genre, page, signal);
      return getPopular(page, signal);
    },
    [debouncedQuery, genre, page]
  );

  const heading = debouncedQuery
    ? `Results for “${debouncedQuery}”`
    : genre
    ? genreData?.genres.find((g) => g.id === genre)?.name
    : "Popular right now";

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />
      <GenreFilter
        genres={genreData?.genres}
        selected={genre}
        onSelect={setGenre}
        disabled={!!debouncedQuery}
      />
      <h1>{heading}</h1>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} onRetry={retry} />}
      {!loading && !error && data && (
        <>
          <MovieGrid movies={data.results} />
          <Pagination page={page} totalPages={data.total_pages} onChange={setPage} />
        </>
      )}
    </>
  );
}
