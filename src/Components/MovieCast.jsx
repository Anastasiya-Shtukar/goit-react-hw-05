import { useLocation, useParams, Link, Outlet } from "react-router-dom";
import useFunction from "../Hooks/UseFunction.jsx";
import { fetchCast } from "../movieApi/MovieApi.js";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const { movieState, loading, error } = useFunction(movieId, fetchCast);

  return (
    <section className={css.section}>
      {loading && <p>loading...</p>}
      {error && <p>Oops, something went wrong, please try again...</p>}

      <ul className={css.ul}>
        {movieState.map((cast) => (
          <li key={cast.id} className={css.liCast}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                  : "https://via.placeholder.com/200"
              }
              alt={cast.name}
              className={css.img}
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
