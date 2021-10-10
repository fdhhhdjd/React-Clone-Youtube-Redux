import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDuHdamxEbWEsZyDbVcHXlDbTYH5gbws5g",
  },
});

export default request;
