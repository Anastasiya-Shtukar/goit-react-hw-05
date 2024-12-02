import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((tred) => (
        <li key={tred.id} className={css.li}>
          <Link to={`/movies/${tred.id}`} state={location} className={css.link}>
            {tred.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
