import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Navbar from "../../../components/Navbar";

const Header = () => {
  return (
    <div className="w-sceen h-16 fixed top-0 left-0 right-0  z-40">
      <Navbar />
    </div>
  );
};

export default Header;
