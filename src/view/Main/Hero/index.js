import { Gradient } from "@mui/icons-material";
import { React, useState } from "react";
import ModalTrailer from "../../../components/ModalTrailer";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let srcVideo = "";

  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full  h-full text-white z-20 flex">
        <div className="container my-auto flex h-[32rem] flex-col-reverse  md:flex-row gap-7">
          <div className="basis-7/12 flex flex-col gap-y-9 justify-center px-2">
            <h1 className="font-bold text-7xl">Venom</h1>
            <p className="font-bold text-sm">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            <div className="flex gap-x-3">
              <button className="bg-primary border-primary rounded-3xl py-2 px-6 shadow-2xl font-semibold">Watch Now</button>
              <button className="bg-white border-white rounded-3xl py-2 px-6 text-primary shadow-xl font-semibold" onClick={handleClickOpen}>
                Watch Trailer
              </button>
              <ModalTrailer isOpen={open} handleClose={handleClose} srcVideo={srcVideo} />
            </div>
          </div>
          <div className=" basis-5/12 px-1">
            <img src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" className="object-cover w-full overflow-hidden  rounded-3xl py-1 h-full" />
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute z-10 bg-black opacity-60 "></div>
      <div className="w-full h-1/3 absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-black "></div>
      <img src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" className="object-cover w-full h-full absolute z-0 overflow-hidden" />
    </div>
  );
};

export default Hero;
// 1. font
// 2. bg Gradient
// 3. bg image
