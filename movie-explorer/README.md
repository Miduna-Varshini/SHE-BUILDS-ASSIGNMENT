# Movie Explorer

A React app to search and browse movies using the [TMDB API](https://developer.themoviedb.org/).

**Live demo:** _add your deployment link here_

## Features
- Search movies (debounced, 500 ms)
- Filter by genre category
- Movie details page with ratings, runtime, genres and overview
- Pagination, loading indicators, error handling with retry
- Responsive layout (mobile to desktop)

## Tech
React 18, Vite, React Router 6, custom hooks (`useFetch`, `useDebounce`), plain CSS.

## Getting started
1. Get a free API key at https://www.themoviedb.org/settings/api
2. `cp .env.example .env` and paste your key into `VITE_TMDB_API_KEY`
3. `npm install`
4. `npm run dev`

## Deployment (Vercel or Netlify)
Push to GitHub, import the repo, set the environment variable `VITE_TMDB_API_KEY`,
build command `npm run build`, output directory `dist`.

## AI-assisted development
Fill this in with your own prompts and notes. Suggested entries:
1. **Generating components:** prompt used to generate `MovieCard`, `SearchBar`, `GenreFilter`.
2. **Refactoring:** list what you extracted into reusable pieces
   (`useFetch` hook, `Rating`, `MovieGrid`, `Pagination`, `Loader`, `ErrorMessage`).
3. **State troubleshooting:** describe one bug you fixed with AI help
   (e.g. page not resetting to 1 when search changes; race conditions fixed with AbortController).
