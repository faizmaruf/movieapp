import "../../App.css";
import { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer/Index";
import Hero from "./Hero";
import HeroDetail from "./HeroDetail";
import TrandingMovies from "./TrandingMovies";

// import getData from "../api";

// import { category, movieType, tvType } from "../api/tmdbApi";
// import tmdbApi from "../api/tmdbApi";
// import apiConfig from "../api/apiConfig";

function Home() {
  // console.log(category, "ini kategory");

  // const { category } = useParams();

  // const [casts, setCasts] = useState([]);

  // useEffect(() => {
  //   const getCredits = async () => {
  //     const response = await tmdbApi.credits(category, 1);
  //     setCasts(response.cast.slice(0, 5));
  //   };
  //   getCredits();
  //   console.log(casts, "ini dari useEffect");
  // }, []);
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      {/* Header */}
      <Header />
      {/* section hero 1 */}
      <Hero />
      {/* section tranding movies  */}
      <TrandingMovies />
      <TrandingMovies />
      {/* <HeroDetail /> */}
      {/* section trailer */}

      <div className="container h-32 text-white">makan sotong</div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
