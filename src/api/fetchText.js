import axios from "axios";

const Send_URL = "https://p2-ej2.herokuapp.com/text/create";
const fetch_URL = "https://p2-ej2.herokuapp.com/text/fetchMany";
const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const sendText = async (inputText) => {
  try {
    await axios.post(Send_URL, { text: inputText });
  } catch (e) {
    console.log(e);
  }
};
export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
