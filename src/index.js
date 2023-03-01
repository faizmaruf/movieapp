import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./view/Main/index";
import Movie from "./view/Movie/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvSeries from "./view/TVSeries";
import NotFound from "./view/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
