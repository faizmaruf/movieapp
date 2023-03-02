import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
import footerbg from "../../../src/assets/images/footer-bg-movie-app.jpeg";
import Footer from "../../components/Footer/Index";
import Catalog from "../../components/Catalog";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import Loading from "../../components/Loading";

function TvSeries() {
  const [seriesItems, setSeriesItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const countItem = 20;

  useEffect(() => {
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
    getTvSeries();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      <Header />
      <div className="relative w-full min-h-screen">
        <Catalog category={"tv"} countItem={countItem} items={seriesItems} />
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg"></div>
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg"></div>
        <img src={footerbg} className=" w-full object-cover h-full absolute bottom-0 z-0 overflow-hidden" />
      </div>
      <Footer />
    </div>
  );
}

export default TvSeries;
