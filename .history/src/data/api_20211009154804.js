import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: "458180323131-5gh6j2d8lscvdj3figmfhr38ojlr9nl6.apps.googleusercontent.com",
    // key: "AIzaSyBN-DLT_s3if8ZzO5QgWQu4Ervh2mvjFk4",
  },
});

export default request;
//!AIzaSyBN-DLT_s3if8ZzO5QgWQu4Ervh2mvjFk4
