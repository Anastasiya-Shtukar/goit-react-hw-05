import { fetchTreding } from "../movieApi/MovieApi";
import { useState, useEffect } from "react";

export default function Home() {
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

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong, please try again...</p>}
      <ul>
        {tredingList.map((tred) => {
          <li key={tred.id}>vrgisvi</li>;
        })}
      </ul>
    </>
  );
}
