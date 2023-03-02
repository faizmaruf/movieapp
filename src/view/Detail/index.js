import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Index";
import HeroDetail from "./HeroDetail";
import Loading from "../../components/Loading";
import axios from "axios";
import { useParams } from "react-router-dom";
import CatalogEpisodes from "./CatalogEpisodes";

const Detail = () => {
  const { id, category } = useParams();
  const [item, setDetailItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // let isSeries = false;

  useEffect(() => {
    const getDetail = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=${API_KEY}`);
        setDetailItem(response.data);
      } catch (error) {
        console.log(error, " << error");
      } finally {
        setIsLoading(false);
      }
    };
    getDetail();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      <Header />
      <HeroDetail item={item} category={category} />
      {category == "tv" && <CatalogEpisodes id={id} category={category} />}
      <Footer />
    </div>
  );
};

export default Detail;
