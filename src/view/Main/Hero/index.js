import { Gradient } from "@mui/icons-material";
import { React, useState } from "react";
import apiConfig from "../../../api/apiConfig";
import ModalTrailer from "../../../components/ModalTrailer";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
  const navigate = useNavigate();
  const { movieItems, category } = props;
  const movieItem = movieItems.slice(7, 8);
  const background = apiConfig.originalImage(movieItem[0]?.backdrop_path);
  const poster = apiConfig.originalImage(movieItem[0]?.poster_path);

  const [open, setOpen] = useState(false);

  const handleClickOpenModalTrailer = () => {
    setOpen(true);
  };
  const handleClickWatch = (id, category) => {
    navigate(`/detail/${id}/${category}`);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full  h-full text-white z-20 flex md:mt-0 ">
        <div className="container my-auto flex h-[32rem] flex-col-reverse  md:flex-row gap-7 ">
          <div className="basis-7/12 flex flex-col gap-y-6 md:gap-y-9 justify-center px-2">
            <h1 className="font-bold text-4xl md:text-7xl">{movieItem[0]?.original_title}</h1>
            <p className="font-bold text-xs md:text-sm">{movieItem[0]?.overview}hvhv</p>
            <div className="flex gap-x-3">
              <button className="bg-primary border-primary rounded-3xl py-2 px-6 shadow-2xl font-semibold" onClick={() => handleClickWatch(movieItem[0]?.id, category)}>
                Watch Now
              </button>
              <button className="bg-white border-white rounded-3xl py-2 px-6 text-primary shadow-xl font-semibold" onClick={handleClickOpenModalTrailer}>
                Watch Trailer
              </button>
              <ModalTrailer isOpen={open} handleClose={handleClose} id={movieItem[0]?.id} category={category} />
            </div>
          </div>
          <div className="basis-5/12 xl:px-24 md:px-0 hidden md:block">
            <img src={poster} className="object-cover w-full overflow-hidden hidden md:block  rounded-3xl py-1 h-full" />
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute z-10 bg-primaryBg opacity-60 "></div>
      <div className="w-full h-1/3 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg "></div>
      <img src={background} className="object-cover w-full h-full absolute z-0 overflow-hidden" />
    </div>
  );
};

export default Hero;
