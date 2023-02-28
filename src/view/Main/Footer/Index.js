import { React, useEffect, useState } from "react";
import BottomBarNavigation from "../../../components/BottomBarNavigation";

const Footer = () => {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);
  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="bg-blue-500 container">
      {!matches && <div className="mt-10"></div>}
      {/* {!matches && <BottomBarNavigation />} */}
      <h1>ini footer</h1>
    </div>
  );
};

export default Footer;
