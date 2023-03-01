import React from "react";
import apiConfig from "../../api/apiConfig";

const CardFilm = (props) => {
  const { key, movieItem } = props;
  const background = apiConfig.originalImage(movieItem?.poster_path);
  return (
    <div className="flex flex-col  rounded-lg h-96 w-52" key={key}>
      <div className="basis-11/12 ">
        <img src={background} className="object-cover rounded-3xl shadow-2xl h-full z-0 overflow-hidden" />
      </div>
      <p className="mt-4 basis-1/12 text-white font-bold text-sm">{movieItem?.original_title}</p>
    </div>
  );
};

export default CardFilm;
