import useHome from "../Hooks/UseHome";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
  const { tredingList, loading, error } = useHome();
  const location = useLocation();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong, please try again...</p>}
      <ul>
        {tredingList.map((tred) => (
          <li key={tred.id}>
            <Link to={`/movies/${tred.id}`} state={location}>
              {tred.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
