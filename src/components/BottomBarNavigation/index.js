import { React, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
const BottomBarNavigation = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <div>
      <div className="bottom-navigation py-2">
        <div className="w-full h-full flex justify-evenly">
          <div className="flex flex-col h-full w-28 ">
            <TvIcon sx={{ margin: "0 auto", color: "white" }} />
            <p className="mx-auto font-bold text-xs text-white">Movies</p>
          </div>
          <div className="flex flex-col h-full w-28 ">
            <HomeIcon sx={{ margin: "0 auto", color: "white" }} />
            <p className="mx-auto font-bold text-xs text-white">Home</p>
          </div>
          <div className="flex flex-col h-full w-28 ">
            <OndemandVideoIcon sx={{ margin: "0 auto", color: "white" }} />
            <p className="mx-auto font-bold text-xs text-white">TV Series</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBarNavigation;
