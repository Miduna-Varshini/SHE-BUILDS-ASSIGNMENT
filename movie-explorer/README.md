# Movie Explorer

A React app to search and browse movies using the TMDB API.

**Live link:** https://movie-explorer-iota-henna.vercel.app

## Features
- Search movies
- Filter by genre
- View movie details
- Show ratings
- Loading indicator and error messages
- Works on mobile and desktop

## Built With
React, Vite, React Router, TMDB API

## How to Run
1. Get a free API key from https://www.themoviedb.org/settings/api
2. Create a `.env` file in the `movie-explorer` folder:
   ```
   VITE_TMDB_API_KEY=your_key_here
   ```
3. Run:
   ```
   npm install
   npm run dev
   ```

## AI-Assisted Activity
- Used AI to generate the React components.
- Refactored repeated code into reusable pieces (`useFetch` hook and small components).
- Used AI to fix problems: a wrong `.env` value and a network "Failed to fetch" error.