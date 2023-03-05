import { React, useState, useEffect } from "react";
import apiConfig from "../../api/apiConfig";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // import CSS animasi

const ButtonPlay = () => {
  return (
    <div className="absolute top-0 left-0 right-0 mx-auto w-full h-full bg-gradient-to-b from-transparent to-primaryBg flex cursor-pointer">
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
  const [state, setState] = useState({
    event: null,
    id: null,
    category: null,
  });

  // const handleClickPlay = (event, id, category) => {
  //   event.preventDefault();
  //   navigate(`/detail/${id}/${category}`);
  // };
  const { key, category, item } = props;
  const background = apiConfig.w500Image(item?.poster);
  useEffect(() => {
    if (state.id !== null) {
      navigate(`/detail/${state.id}/${state.category}`, { replace: true, state: { key: `detail/${state.id}/${state.category}` } });
      // window.location.reload();
      window.scrollTo(0, 0);
    }
  }, [state.id !== null]);

  return (
    <div className="flex flex-col  rounded-lg h-96 w-52 " key={key} data-aos="fade-up">
      <div
        className="basis-11/12 relative"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onClick={(e) =>
          setState({
            event: e,
            id: item?.id,
            category: category,
          })
        }>
        <img src={background} className="object-cover rounded-3xl shadow-2xl h-full z-0 overflow-hidden" />
        {over && <ButtonPlay />}
      </div>
      <p className="mt-4 basis-1/12 text-white font-bold text-sm flex flex-col">{item?.title}</p>
    </div>
  );
};

export default CardFilm;
