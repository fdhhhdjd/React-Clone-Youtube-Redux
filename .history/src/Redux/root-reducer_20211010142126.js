import { combineReducers } from "redux";
import authReducer from "./Reducer/AuthReducer";
import {
  homeVideosReducer,
  selectedVideoReducer,
} from "../Redux/Reducer/VideoReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
});
export default rootReducer;
