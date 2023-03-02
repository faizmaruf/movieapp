import axios from "axios";
import { React, useState, useEffect } from "react";
import ScrollCard from "../../../components/ScrollCard";

const SimilarMovies = (props) => {
  const { id } = props;
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMoviesSimilar = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&page=2`);
        setMovieItems(response.data.results);
      } catch (error) {
        console.log(error, " << error");
      }
    };
    getMoviesSimilar();
  }, []);
  console.log(movieItems, "ini di similar");
  return (
    <div className="text-white text-3xl container ">
      <h2 className="text-head-h2">Similar Movies</h2>
      <ScrollCard items={movieItems} />
    </div>
  );
};

export default SimilarMovies;
