import { React, useState, useEffect } from "react";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
            <ConnectedTvIcon sx={{ height: "2.3rem", width: "4rem", marginRight: "0.1rem", color: "white" }} />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">RSHB TV</span>
          </a>
          {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </button> */}
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li className="active">
                <a href="#" class="block py-2 pl-3 pr-4 text-xl font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-xl font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-xl font-bold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0  md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary md:dark:hover:bg-transparent">
                  TV Series
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
