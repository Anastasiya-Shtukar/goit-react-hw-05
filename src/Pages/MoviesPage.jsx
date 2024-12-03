import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../Components/MovieList";
import { fetchSearch } from "../MovieApi/MovieApi";
import { useLocation } from "react-router-dom";
import css from "./MoviesPage.module.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const location = useLocation();

  useEffect(() => {
    if (query) {
      fetchSearch(query).then(setMovies).catch(console.error);
    }
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 ? (
        <MovieList movies={movies} location={location} />
      ) : (
        <p className={css.notMovie}>Sorry, we don't have that movie.</p>
      )}
    </div>
  );
}
