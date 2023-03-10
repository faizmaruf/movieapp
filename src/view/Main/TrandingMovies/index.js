import axios from "axios";
import { React, useState, useEffect } from "react";
import apiConfig from "../../../api/apiConfig";
import CardFilm from "../../../components/CardFilm/Index";
import ScrollCard from "../../../components/ScrollCard";

const TrandingMovies = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`);
        setMovieItems(response.data.results);
      } catch (error) {
        console.log(error, " << error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="text-white text-3xl container ">
      <h2 className="text-head-h2">Tranding Movies</h2>
      <ScrollCard items={movieItems} />
    </div>
  );
};

export default TrandingMovies;
