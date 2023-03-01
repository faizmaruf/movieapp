import React from "react";

const CardFilm = () => {
  return (
    <div className="flex flex-col  rounded-lg h-full w-52  ">
      <div className="basis-11/12 ">
        <img src="https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w" className="object-cover rounded-3xl shadow-2xl h-full z-0 overflow-hidden" />
      </div>
      <p className="mt-4 basis-1/12 text-white font-bold text-sm">Spider Man</p>
    </div>
  );
};

export default CardFilm;
