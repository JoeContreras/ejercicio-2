import axios from "axios";

const Send_URL = "https://p2-ej2.herokuapp.com/text/create";
const fetch_URL = "https://p2-ej2.herokuapp.com/text/fetchMany";

export const sendText = async (inputText) => {
  try {
    await axios.post(Send_URL, { text: inputText });
  } catch (e) {
    console.log(e);
  }
};
export const fetchText = async () => {
  const { data } = await axios.get(fetch_URL);

  return data;
};
