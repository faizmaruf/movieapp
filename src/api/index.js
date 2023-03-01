import axios from "axios";
const getData = async () => {
  try {
    const API_KEY = "cfdb19c9d57dcdf0f52c10506187d04e";
    const response = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`);

    console.log(response, "=<<<< respon");
    return response.data;
  } catch (error) {
    console.log(error, "<==== erornya");
  }
};

export default getData;
