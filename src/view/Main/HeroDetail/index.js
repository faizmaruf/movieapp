import React from "react";

import { Gradient } from "@mui/icons-material";

import ModalTrailer from "../../../components/ModalTrailer";

const HeroDetail = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full  h-full text-white z-20 flex">
        <div className="container my-auto flex h-[32rem] flex-col-reverse  md:flex-row-reverse gap-7">
          <div className="basis-7/12 flex flex-col gap-y-6 justify-center px-2">
            <h1 className="font-bold text-7xl">Venom</h1>
            <div className="flex gap-x-2">
              <button className="btn-tag">Family</button>
              <button className="btn-tag">Fantasy</button>
            </div>
            <p className="font-bold text-sm">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            <div className="flex flex-col gap-x-3">
              <h2 className="font-bold text-2xl">Cast</h2>
              <div className="flex gap-2 flex-wrap">
                <div className="flex h-40 w-24 flex-col">
                  <div className="bg-black w-full basis-10/12"></div>
                  <p className="block basis-2/12 text-sm">lorem</p>
                </div>
                <div className="flex h-40 w-24 flex-col">
                  <div className="bg-black w-full basis-10/12"></div>
                  <p className="block basis-2/12 text-sm">lorem</p>
                </div>
                <div className="flex h-40 w-24 flex-col">
                  <div className="bg-black w-full basis-10/12"></div>
                  <p className="block basis-2/12 text-sm">lorem</p>
                </div>
                <div className="flex h-40 w-24 flex-col">
                  <div className="bg-black w-full basis-10/12"></div>
                  <p className="block basis-2/12 text-sm">lorem</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-5/12 px-1">
            <img src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" className="object-cover w-full overflow-hidden  rounded-3xl py-1 h-full" />
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute z-10 bg-hero-gradient "></div>
      <img src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" className="object-cover w-full h-full absolute z-0 overflow-hidden" />
    </div>
  );
};

export default HeroDetail;
// 1. font
// 2. bg Gradient
// 3. bg image
