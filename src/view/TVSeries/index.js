import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
import footerbg from "../../../src/assets/images/footer-bg-movie-app.jpeg";
import Footer from "../../components/Footer/Index";
import Catalog from "../../components/Catalog";
import axios from "axios";
import Loading from "../../components/Loading";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import SearchBar from "../../components/SearchBar";

function TvSeries() {
  const [seriesItems, setSeriesItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [timerId, setTimerId] = useState(null);
  const countItem = 20;
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  useEffect(() => {
    setIsLoading(true);
    const getTvSeries = async () => {
      try {
        const page = generateRandomNumber();
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&page=${page}`);
        setSeriesItems(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error, " << error");
      } finally {
        setIsLoading(false);
      }
    };
    getTvSeries();
  }, []);

  const handleSearchRequest = async () => {
    setIsLoadingSearch(true);
    const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchQuery}`);
      setSeriesItems(response.data.results);
      setIsLoadingSearch(false);
    } catch (error) {
      console.log(error, " << error");
    } finally {
      setIsLoading(false);
    }
  };
  const SEARCH_DELAY = 1850;
  const handleInputChange = (event) => {
    const newQuery = event;
    setSearchQuery(newQuery);

    // Hapus timer sebelumnya
    if (timerId) {
      clearTimeout(timerId);
    }

    // Mulai timer baru
    setTimerId(
      setTimeout(() => {
        handleSearchRequest();
        setTimerId(null);
      }, SEARCH_DELAY)
    );
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      <Header />
      <div className="text-white my-auto text-3xl container min-h-full relative z-20 mt-16 md:mt-24 ">
        <SearchBar searchQuery={searchQuery} handleInputChange={handleInputChange} />
      </div>
      <div className="relative w-full min-h-screen">
        {isLoadingSearch ? (
          <div className="text-white my-auto text-3xl container h-[60vh] relative z-20 mt-0">
            <h2 className="text-head-h2">TV Series</h2>
            <div className="flex flex-col min-h-full w-full ">
              <Box sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
                <CircularProgress />
              </Box>
            </div>
          </div>
        ) : (
          <Catalog category={"tv"} countItem={countItem} items={seriesItems} />
        )}
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg"></div>
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg"></div>
        <img src={footerbg} className=" w-full object-cover h-full absolute bottom-0 z-0 overflow-hidden" />
      </div>
      <Footer />
    </div>
  );
}

export default TvSeries;
