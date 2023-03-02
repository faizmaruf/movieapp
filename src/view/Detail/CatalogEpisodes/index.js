import { React, useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import Catalog from "../../../components/Catalog";
import axios from "axios";
import footerbg from "../../../assets/images/footer-bg-movie-app.jpeg";

const CatalogEpisodes = (props) => {
  const { id, category } = props;
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const countItem = 0;
  useEffect(() => {
    const getTvSeries = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/${category}/${id}/season/1?api_key=${API_KEY}&page=1`);
        setEpisodes(response.data.episodes);
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
  // console.log(episodes, "ini episodes");

  return (
    <div className="relative w-full min-h-screen">
      {/* <Catalog category={"tv"} countItem={countItem} items={episodes} /> */}
      <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg"></div>
      <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg"></div>
      <img src={footerbg} className=" w-full object-cover h-full absolute bottom-0 z-0 overflow-hidden" />
      <div className="font-bold text-white">vhjewuivbiuwev</div>
    </div>
  );
};

export default CatalogEpisodes;
