import React from "react";
import CardFilm from "../CardFilm/Index";

const Catalog = (props) => {
  const { type, countItem, items } = props;
  const data = items.slice(0, countItem);
  return (
    <div className="text-white my-auto text-3xl container min-h-full relative z-20 mt-16 md:mt-24">
      <h2 className="text-head-h2">{type}</h2>
      <div className="flex flex-col min-h-full h w-full ">
        <div className="flex h-full text-white mt-6 min-w-min justify-around gap-y-6 gap-x-4 flex-wrap">
          {data.map((item, i) => (
            <CardFilm key={i} movieItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
