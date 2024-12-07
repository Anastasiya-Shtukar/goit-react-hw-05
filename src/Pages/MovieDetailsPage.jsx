import { Suspense } from "react";
import {
  useLocation,
  useParams,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import useFunction from "../Hooks/UseFunction.jsx";
import css from "./MovieDetailsPage.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { fetchDetails } from "../MovieApi/MovieApi.js";

export default function MovieDetails() {
  const { movieId } = useParams();
  const { movieState, loading, error } = useFunction(movieId, fetchDetails);
  const location = useLocation();
  const navigate = useNavigate();

  const imageUrl = movieState.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieState.poster_path}`
    : "https://via.placeholder.com/500";

  const genres = movieState.genres;

  const popularity = movieState.vote_average * 10;
  const handleBack = () => {
    navigate(`/movies${location.state.from.search}`);
  };

  return (
    console.log(location),
    (
      <main className={css.main}>
        <button onClick={handleBack} className={css.back}>
          <IoArrowBackOutline />
          Go back
        </button>
        {loading && <p>loading...</p>}
        {error && <p>Oops, something went wrong, please try again...</p>}
        <div className={css.details}>
          <img src={imageUrl} alt=" " className={css.img} />
          <div className={css.movieDetails}>
            <h1>{movieState.title}</h1>
            <p>User Score: {popularity} %</p>
            <h2>Overview</h2>
            <p>{movieState.overview}</p>
            <h2>Genres</h2>
            {genres && (
              <ul className={css.ulGenres}>
                {genres.map((gen) => (
                  <li key={gen.id}>{gen.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div>
          <p className={css.p_info}>Additional information:</p>
          <ul>
            <li>
              <Link to="cast" state={{ from: location }} className={css.link}>
                Cast
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                state={{ from: location }}
                className={css.link}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    )
  );
}
