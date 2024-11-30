import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";
import NotFoundPage from "../Pages/NotFoundPage";
import "./App.css";

const Home = lazy(() => import("../Pages/HomePage.jsx"));
const Movies = lazy(() => import("../Pages/MoviesPage.jsx"));

function App() {
  return (
    <div className="container">
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
