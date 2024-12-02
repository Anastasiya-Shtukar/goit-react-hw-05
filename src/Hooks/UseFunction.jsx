import { useState, useEffect } from "react";

const useFunction = (movieId, fetchFunction) => {
  const [movieState, setMovieState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function castMovie() {
      try {
        setLoading(true);
        const response = await fetchFunction(movieId);
        setMovieState(response);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    castMovie();
  }, [movieId]);

  return {
    movieState,
    loading,
    error,
  };
};

export default useFunction;
