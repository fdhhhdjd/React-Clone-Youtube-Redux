import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",
  },
});

export default request;
