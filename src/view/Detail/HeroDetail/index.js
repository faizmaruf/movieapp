import React from "react";
import ModalTrailer from "../../../components/ModalTrailer";
import apiConfig from "../../../api/apiConfig";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const HeroDetail = (props) => {
  const { item, category } = props;
  const genres = item?.genres;
  const background = apiConfig.originalImage(item?.backdrop_path);
  const poster = apiConfig.originalImage(item?.poster_path);
  const title = category == "movie" ? item?.original_title : item?.original_name;
  const release_date = category == "movie" ? item?.release_date : item?.first_air_date;
  const runtime = category == "movie" ? item?.runtime + " min" : item?.number_of_episodes + " episodes (" + item?.number_of_seasons + " seasons)";

  console.log(item);
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full  h-full text-white z-20 flex">
        <div className="container my-auto flex h-[32rem] flex-col-reverse  md:flex-row-reverse ">
          <div className="basis-7/12 flex flex-col gap-y-3 md:gap-y-5 justify-center px-2">
            <h1 className="font-bold text-4xl md:text-7xl">{title}</h1>

            <div className="flex flex-col gap-3 ">
              <h2 className="font-bold text-xl">{item.tagline}</h2>
              <div className="flex gap-2 flex-wrap font-bold">
                <div className="flex pr-2 flex-col border-r">
                  <p className="block basis-2/12 my-auto text-sm">
                    Rating : {item.vote_average}/<span className="opacity-60">10</span>
                  </p>
                </div>
                <div className="flex pr-2 flex-col border-r">
                  <p className="block my-auto basis-2/12 text-sm">{release_date}</p>
                </div>
                <div className="flex pr-2 flex-col border-r">
                  <p className="block my-auto basis-2/12 text-sm ">{runtime} </p>
                </div>
                <div className="flex pr-2 flex-col border-r">
                  <p className="block my-auto basis-2/12 text-sm text-green-400">{item.status}</p>
                </div>
              </div>
            </div>
            <p className="font-bold text-xs md:text-sm">{item.overview}</p>
            <div className="flex gap-2 flex-wrap">
              {genres.map((item) => (
                <button className="btn-tag" key={item.id}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="basis-5/12 xl:px-24 md:px-0 hidden md:block">
            <img src={poster} className="object-cover w-full overflow-hidden hidden md:block rounded-3xl py-1 h-full" />
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute z-10 bg-hero-gradient "></div>
      <img src={background} className="object-cover w-full h-full absolute z-0 overflow-hidden" />
    </div>
  );
};

export default HeroDetail;
// 1. font
// 2. bg Gradient
// 3. bg image
