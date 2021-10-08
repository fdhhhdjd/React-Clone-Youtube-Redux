import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    //  key: "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",
    key: "AIzaSyBN-DLT_s3if8ZzO5QgWQu4Ervh2mvjFk4",
  },
});

export default request;
//!AIzaSyBN-DLT_s3if8ZzO5QgWQu4Ervh2mvjFk4
