import { fetchTreding } from "../movieApi/MovieApi";
import { useState, useEffect } from "react";

const useHome = () => {
  const [tredingList, setTredingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function tredingMovie() {
      try {
        setLoading(true);
        const treding = await fetchTreding();

        setTredingList(treding);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    tredingMovie();
  }, []);
  return {
    tredingList,
    loading,
    error,
  };
};

export default useHome;
