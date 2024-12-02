import { useParams } from "react-router-dom";
import useFunction from "../Hooks/UseFunction.jsx";
import { fetchReviews } from "../movieApi/MovieApi.js";
import css from "./MovieReviews.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const { movieState, loading, error } = useFunction(movieId, fetchReviews);

  return (
    <section className={css.section}>
      {loading && <p>loading...</p>}
      {error && <p>Oops, something went wrong, please try again...</p>}
      <ul className={css.ul}>
        {movieState.map((cast) => (
          <li key={cast.id}>
            <h2>{cast.author}</h2>
            <p>{cast.content}</p>
          </li>
        ))}
      </ul>
      {movieState.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
    </section>
  );
}
