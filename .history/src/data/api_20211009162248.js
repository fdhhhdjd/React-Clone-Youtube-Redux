import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDuHdamxEbWEsZyDbVcHXlDbTYH5gbws5g",
  },
});

export default request;
