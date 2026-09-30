const BASE = "https://api.themoviedb.org/3";
const KEY = import.meta.env.VITE_TMDB_API_KEY;

export const IMG = (path, size = "w500") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

async function request(endpoint, params = {}, signal) {
  if (!KEY) throw new Error("Missing API key. Add VITE_TMDB_API_KEY to your .env file.");
  const qs = new URLSearchParams({ api_key: KEY, ...params });
  const res = await fetch(`${BASE}${endpoint}?${qs}`, { signal });
  if (!res.ok) throw new Error(`Request failed (${res.status}). Please try again.`);
  return res.json();
}

export const getPopular = (page, signal) => request("/movie/popular", { page }, signal);
export const searchMovies = (query, page, signal) =>
  request("/search/movie", { query, page }, signal);
export const discoverByGenre = (genre, page, signal) =>
  request("/discover/movie", { with_genres: genre, page, sort_by: "popularity.desc" }, signal);
export const getGenres = (signal) => request("/genre/movie/list", {}, signal);
export const getMovie = (id, signal) => request(`/movie/${id}`, {}, signal);
