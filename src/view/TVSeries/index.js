import React from "react";
import Header from "../Main/Header";
import TrandingMovies from "../Main/TrandingMovies";

function TvSeries() {
  return (
    <div className="container-main h-screen bg-primaryBg">
      <Header />

      <TrandingMovies />

      <div className="container h-32 text-white">makan sotong</div>
    </div>
  );
}

export default TvSeries;
