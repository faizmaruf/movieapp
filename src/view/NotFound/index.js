import React from "react";
import Header from "../../components/Header";
import footerbg from "../../../src/assets/images/footer-bg-movie-app.jpeg";
import Footer from "../../components/Footer/Index";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

const NotFound = () => {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      <Header />
      <div className="relative w-full h-screen">
        <div className="absolute w-full  h-full text-white z-20 flex">
          <div className="container my-auto flex flex-col-reverse  md:flex-row ">
            <div className="basis-12/12 flex w-full flex-col gap-y-9 justify-center px-2">
              <h1 className="font-bold text-9xl text-center">404</h1>
              <p className="font-bold text-lg text-center">Page Not Found</p>
            </div>
            <Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: false }}>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full h-full absolute z-10  bg-gradient-to-b from-transparent to-primaryBg "></div>
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg "></div>
        <img src={footerbg} className="object-cover w-full h-full absolute z-0 overflow-hidden" />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
