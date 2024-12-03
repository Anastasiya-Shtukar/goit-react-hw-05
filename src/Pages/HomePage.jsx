import useHome from "../Hooks/UseHome";
import { useLocation } from "react-router-dom";
import css from "./HomePage.module.css";
import MovieList from "../Components/MovieList";

export default function Home() {
  const { tredingList, loading, error } = useHome();
  const location = useLocation();

  return (
    <div className={css.div}>
      {loading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong, please try again...</p>}
      <h1>Trending today</h1>
      <MovieList movies={tredingList} location={location} />
    </div>
  );
}
