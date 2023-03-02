import "../../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Index";
import Hero from "./Hero";
import HeroDetail from "../Detail/HeroDetail";
import TrandingMovies from "./TrandingMovies";
import Catalog from "../../components/Catalog";

import { category, movieType, tvType } from "../../api/tmdbApi";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Loading from "../../components/Loading";

function Home() {
  const [movieItems, setMovieItems] = useState([]);
  const [seriesItems, setSeriesItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const countItem = 10;

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
    const getTvSeries = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=1`);
        setSeriesItems(response.data.results);
      } catch (error) {
        console.log(error, " << error");
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
    getTvSeries();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      <Header />
      <Hero movieItems={movieItems} category={"movie"} />
      <TrandingMovies />
      <Catalog category={"movie"} countItem={countItem} items={movieItems} />
      <Catalog category={"tv"} countItem={countItem} items={seriesItems} />
      <Footer />
    </div>
  );
}

export default Home;
