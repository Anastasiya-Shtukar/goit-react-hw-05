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
        setError(error);
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

export default function Home() {
  const { tredingList, loading, error } = useHome();

  return (
    console.log(tredingList),
    (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>Oops, something went wrong, please try again...</p>}
        <ul>
          {tredingList.map((tred) => {
            <li key={tred.id}>{tred.title}</li>;
          })}
        </ul>
      </>
    )
  );
}
