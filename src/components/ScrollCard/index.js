import React from "react";
import apiConfig from "../../api/apiConfig";
import CardFilm from "../CardFilm/Index";

const ScrollCard = (props) => {
  const { items } = props;
  const dataItems = items.map((item) => {
    return {
      id: item.id,
      title: item.original_title ? item.original_title : item.original_name ? item.original_name : item.name,
      poster: apiConfig.originalImage(item?.poster_path),
    };
  });
  console.log(items, "items di scrollcard");
  return (
    <div className="flex flex-col h-full h w-full overflow-auto no-scrollbar overflow-y-hidden ">
      <div className="flex min-w-min h-full text-white mt-6  gap-x-6">
        {dataItems.map((item, i) => (
          <CardFilm key={i} category={"movie"} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ScrollCard;
