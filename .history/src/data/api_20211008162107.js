import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBN-DLT_s3if8ZzO5QgWQu4Ervh2mvjFk4",
  },
});

export default request;
