import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-c18fa.firebaseio.com/"
});

export default instance;
