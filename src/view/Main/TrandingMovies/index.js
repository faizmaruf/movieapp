import React from "react";
import CardFilm from "../../../components/CardFilm/Index";

const TrandingMovies = () => {
  return (
    <div className="text-white text-3xl container ">
      <h2 className="text-head-h2">Tranding Movies</h2>
      <div className="flex flex-col h-96 h w-full overflow-auto no-scrollbar ">
        {/* disini naro width selebar mungkin langusng parent container */}
        <div className="flex min-w-min h-full text-white mt-6  gap-x-2">
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
        </div>
      </div>
    </div>
  );
};

export default TrandingMovies;
