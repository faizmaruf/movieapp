import { React, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SettingsIcon from "@mui/icons-material/Settings";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
// import styled from "@material-ui/core/styles";
// import { makeStyles } from "@mui/styles";
// import { createStyles, makeStyles } from "@mui/styles";

const BottomBarNavigation = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  return (
    <div>
      <div className="bottom-navigation">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Attendance" icon={<EventAvailableIcon />} />
          <BottomNavigationAction label="Checkout" icon={<MeetingRoomIcon />} />
          <BottomNavigationAction label="Form" icon={<FormatListBulletedIcon />} />
          <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default BottomBarNavigation;
