import axios from "axios";
const getData = async () => {
  try {
    const API_KEY = "xxx";
    const response = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`);

    console.log(response, "=<<<< respon");
  } catch (error) {
    console.log(error, "<==== erornya");
  }
};

export default getData;
