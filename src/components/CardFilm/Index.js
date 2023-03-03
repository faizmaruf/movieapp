import { React, useState, useEffect } from "react";
import apiConfig from "../../api/apiConfig";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // import CSS animasi

const ButtonPlay = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
    });
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 mx-auto w-full h-full bg-gradient-to-b from-transparent to-primaryBg flex cursor-pointer" data-aos="fade-up">
      <PlayCircleIcon sx={{ color: "#F90900", fontSize: "3rem", margin: "auto" }} />
    </div>
  );
};

const CardFilm = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const navigate = useNavigate();
  let [over, setOver] = useState(false);

  const handleClickPlay = (event, id, category) => {
    event.preventDefault();
    navigate(`/detail/${id}/${category}`);
  };
  const { key, category, item } = props;
  const background = apiConfig.originalImage(item?.poster);

  return (
    <div className="flex flex-col  rounded-lg h-96 w-52 " key={key} data-aos="fade-up">
      <div className="basis-11/12 relative" onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} onClick={(e) => handleClickPlay(e, item.id, category)}>
        <img src={background} className="object-cover rounded-3xl shadow-2xl h-full z-0 overflow-hidden" />
        {over && <ButtonPlay />}
      </div>
      <p className="mt-4 basis-1/12 text-white font-bold text-sm flex flex-col">{item?.title}</p>
    </div>
  );
};

export default CardFilm;
