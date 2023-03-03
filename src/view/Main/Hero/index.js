import { Gradient } from "@mui/icons-material";
import { React, useState } from "react";
import apiConfig from "../../../api/apiConfig";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../../style.css";

const Hero = (props) => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const navigate = useNavigate();
  const { movieItems, category, handleClickOpenModalTrailer } = props;

  const handleClickWatch = (id, category) => {
    navigate(`/detail/${id}/${category}`);
  };

  return (
    <div>
      <Swiper autoplay={{ delay: 4000 }} spaceBetween={10} slidesPerView={1} grabCursor={true} pagination={{ clickable: true }}>
        {movieItems.slice(0, 10).map((movieItem, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen">
              <div className="absolute w-full  h-full text-white z-20 flex md:mt-0 opa ">
                <div className="container my-auto flex h-[32rem] flex-col-reverse  lg:flex-row gap-7 ">
                  <div className="basis-7/12 flex flex-col gap-y-6 md:gap-y-9 justify-center px-2">
                    <h1 className="font-bold text-4xl md:text-7xl">{movieItem?.original_title}</h1>
                    <p className="font-bold text-xs md:text-sm">{movieItem?.overview}</p>
                    <div className="flex gap-x-3">
                      <button className="hover:scale-105 transition duration-100 ease-in-out bg-primary border-primary rounded-3xl py-2 px-6 shadow-2xl font-semibold" onClick={() => handleClickWatch(movieItem?.id, category)}>
                        Watch Now
                      </button>
                      <button className="hover:scale-105 transition duration-100 ease-in-out bg-white border-white rounded-3xl py-2 px-6 text-primary shadow-xl font-semibold" onClick={() => handleClickOpenModalTrailer(movieItem?.id, category)}>
                        Watch Trailer
                      </button>
                    </div>
                  </div>
                  <div className="basis-5/12 xl:px-24 md:px-0 hidden lg:block">
                    <img src={apiConfig.originalImage(movieItem?.poster_path)} className="object-cover w-full overflow-hidden hidden md:block  rounded-3xl py-1 h-full" />
                  </div>
                </div>
              </div>
              <div className="w-full h-full absolute z-10 bg-primaryBg opacity-60 "></div>
              <div className="w-full h-1/3 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg "></div>
              <img src={apiConfig.originalImage(movieItem?.backdrop_path)} className="object-cover w-full h-full absolute z-0 overflow-hidden" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
