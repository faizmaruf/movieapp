import "../App.css";
import { useState, useEffect } from "react";

import Header from "./Main/Header";
import Footer from "./Main/Footer/Index";
import Hero from "./Main/Hero";
import HeroDetail from "./Main/HeroDetail";

// import getData from "../api";

function App() {
  return (
    // <div className="container-main bg-black">
    //   {/* <div className="absolute bg-blue-600 w-screen h-screen top-0 -z-10-10 ">lorem ipsum </div> */}
    //   <div className="container min-h-screen z-10 bg-primary">
    //     <div className="container min-h-screen relative ">
    //       <Header />
    //     </div>
    //     <Footer />
    //   </div>
    // </div>
    <div className="container-main bg-black">
      {/* Header */}
      <Header />
      {/* section hero 1 */}
      <Hero />
      {/* <HeroDetail /> */}
      {/* section trailer */}
      <div className="container bg-slate-300 text-white">makan sotong</div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
