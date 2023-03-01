import React from "react";
import Header from "../Main/Header";

const NotFound = () => {
  return (
    <div className="container-main h-screen bg-primaryBg">
      <Header />
      <div className="relative w-full h-screen">
        <div className="absolute w-full  h-full text-white z-20 flex">
          <div className="container my-auto flex flex-col-reverse  md:flex-row ">
            <div className="basis-12/12 flex w-full flex-col gap-y-9 justify-center px-2">
              <h1 className="font-bold text-9xl text-center">404</h1>
              <p className="font-bold text-lg text-center">Page Not Found</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute z-10 bg-primaryBg opacity-60 "></div>
        <div className="w-full h-1/3 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg "></div>
        <img src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" className="object-cover w-full h-full absolute z-0 overflow-hidden" />
      </div>
    </div>
  );
};

export default NotFound;
