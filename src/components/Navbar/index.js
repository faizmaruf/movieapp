import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.href);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let slicedStr = currentUrl.split("/");
  let activePage = slicedStr[slicedStr.length - 1];
  // console.log(slicedStr, "url gua ambil");
  // console.log(currentUrl, "url gua ambil");
  // console.log(activePage, "url gua ambil");

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  return (
    <div>
      <nav class={` px-2 sm:px-4 py-2.5 rounded-b-md ${isFixed ? "fixed navbar-scroll-down left-0 right-0  z-40" : "navbar-scroll-up"} `}>
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex mx-auto  items-center md:mx-0">
            <ConnectedTvIcon sx={{ height: "2.3rem", width: "4rem", marginRight: "0.1rem", color: "white" }} />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">RSHB TV</span>
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li className={`${activePage == "" ? "active" : ""}`}>
                <a href="#" class="block py-2 pl-3 pr-4 text-xl font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent" aria-current="page">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className={`${activePage == "movie" ? "active" : ""}`}>
                <a href="#" class="block py-2 pl-3 pr-4 text-xl font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent">
                  <Link to="/movie">Movies</Link>
                </a>
              </li>
              <li className={`${activePage == "tvseries" ? "active" : ""}`}>
                <a href="#" class="block py-2 pl-3 pr-4 text-xl font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent">
                  <Link to="/tvseries">TV Series</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
