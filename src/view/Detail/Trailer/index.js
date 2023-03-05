import axios from "axios";
import { React, useState, useEffect } from "react";
import footerbg from "../../../assets/images/footer-bg-movie-app.jpeg";
import Loading from "../../../components/Loading";
import TrailerNotFound from "../../../components/TrailerNotFound";

const Trailer = (props) => {
  const { id, category } = props;
  const [item, setDetailItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
        const response = await axios.get(`https://api.themoviedb.org/3/${category}/${id}/videos?api_key=${API_KEY}`);
        setDetailItem(response.data.results);
      } catch (error) {
        console.log(error, " << error");
      } finally {
        setIsLoading(false);
      }
    };
    getVideos();
  }, [id, category]);
  if (isLoading) {
    return <Loading />;
  }
  const keyVideo = item[item.length - 1]?.key;

  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full  h-full text-white z-20 flex ">
        <div className="container my-auto flex h-[32rem] flex-col gap-y-4 ">
          <h1 className="text-head-h2">Trailer</h1>
          {keyVideo && (
            <div className="flex flex-col min-h-full w-full shadow-2xl rounded-xl">
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${keyVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          )}
          {!keyVideo && <TrailerNotFound />}
        </div>
      </div>

      <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg  "></div>
      <img src={footerbg} className=" w-full object-cover h-full absolute bottom-0 z-0 overflow-hidden" />
    </div>
  );
};

export default Trailer;
