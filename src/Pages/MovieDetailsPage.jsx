import { useLocation, useParams } from "react-router-dom";
import { fetchDetails } from "../movieApi/MovieApi.js";
import { useState, useEffect } from "react";

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function detailsMovie() {
      try {
        setLoading(true);
        const response = await fetchDetails(movieId);
        console.log(response);
        setMovieDetails(response);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    detailsMovie();
  }, [movieId]);

  return (
    console.log(movieDetails),
    (
      <div>
        {loading && <p>loading...</p>}
        {error && <p>Oops, something went wrong, please try again...</p>}
        <h1>{movieDetails.title}</h1>
        <p>get</p>
      </div>
    )
  );
}
