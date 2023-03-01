import React from "react";
import Header from "../Main/Header";
import Footer from "../Main/Footer/Index";
import Hero from "../Main/Hero";
import HeroDetail from "../Main/HeroDetail";
import TrandingMovies from "../Main/TrandingMovies";

const Movie = () => {
  return (
    <div className="container-main h-screen bg-primaryBg">
      {/* Header */}
      <Header />
      {/* section hero 1 */}
      {/* <Hero /> */}
      {/* <HeroDetail /> */}
      {/* section tranding movies  */}
      {/* {/* <TrandingMovies /> */}
      <TrandingMovies />
      {/* section trailer */}
      <div className="container h-32 text-white">makan sotong</div>
    </div>
  );
};

export default Movie;
