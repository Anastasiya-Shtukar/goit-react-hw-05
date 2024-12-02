import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import NotFoundPage from "../Pages/NotFoundPage";
import "./App.css";

const Home = lazy(() => import("../Pages/HomePage.jsx"));
const Movies = lazy(() => import("../Pages/MoviesPage.jsx"));
const DetailsMovie = lazy(() => import("../Pages/MovieDetailsPage.jsx"));
const Cast = lazy(() => import("./MovieCast.jsx"));
const Reviews = lazy(() => import("./MovieReviews.jsx"));

function App() {
  return (
    <div className="container">
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<DetailsMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
