import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Header from "../Header";
import Footer from "../Footer/Index";
import footerbg from "../../assets/images/footer-bg-movie-app.jpeg";
const Loading = () => {
  return (
    <div className="container-main bg-primaryBg flex flex-col gap-y-12">
      <Header />
      <div className="relative w-full h-screen">
        <div className="absolute w-full  h-full text-white z-20 flex">
          <div className="container my-auto flex flex-col-reverse  md:flex-row ">
            <div className="basis-12/12 flex w-full flex-col gap-y-9 justify-center px-2">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute z-10  bg-gradient-to-b from-transparent to-primaryBg "></div>
        <div className="w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg "></div>
        <img src={footerbg} className="object-cover w-full h-full absolute z-0 overflow-hidden" />
      </div>
      <Footer />
    </div>
  );
};

export default Loading;
