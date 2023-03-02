import React from "react";
import apiConfig from "../../api/apiConfig";
import CardFilm from "../CardFilm/Index";

const Catalog = (props) => {
  const { category, countItem, items } = props;
  // countItem == 0 ? (countItem = items.length) : "";
  const titleCatalog = category == "tv" ? "TV Series" : category == "movie" ? "Movies" : "Testing";
  const dataItems = items.map((item) => {
    return {
      id: item.id,
      title: item.original_title ? item.original_title : item.original_name ? item.original_name : item.name,
      poster: apiConfig.originalImage(item?.poster_path),
    };
  });

  const data = dataItems.slice(0, countItem);
  return (
    <div className="text-white my-auto text-3xl container min-h-full relative z-20 mt-16 md:mt-24">
      <h2 className="text-head-h2">{titleCatalog}</h2>
      <div className="flex flex-col min-h-full h w-full ">
        <div className="flex h-full text-white mt-6 min-w-min justify-around gap-y-6 gap-x-4 flex-wrap">
          {data.map((item, i) => (
            <CardFilm key={i} category={category} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
