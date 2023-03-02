import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Index";
import footerbg from "../../../src/assets/images/footer-bg-movie-app.jpeg";
import Catalog from "../../components/Catalog";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import Loading from "../../components/Loading";
import SearchBar from "../../components/SearchBar";

const Movie = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const countItem = 20;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`);
        setMovieItems(response.data.results);
      } catch (error) {
        console.log(error, " << error");
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  // console.log(movieItems, "movieitems di movie catalog");
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      <Header />
      <div className="text-white my-auto text-3xl container min-h-full relative z-20 mt-16 md:mt-24 ">
        <SearchBar />
      </div>
      <div className="relative w-full min-h-screen">
        <Catalog category={"movie"} countItem={countItem} items={movieItems} />
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg  "></div>
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg "></div>
        <img src={footerbg} className=" w-full object-cover h-full absolute bottom-0 z-0 overflow-hidden" />
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
