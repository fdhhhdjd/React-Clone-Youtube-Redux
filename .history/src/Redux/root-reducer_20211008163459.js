import { combineReducers } from "redux";
import { authReducer } from "./Reducer/AuthReducer";
import { homeVideosReducer } from "../Redux/Reducer/VideoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
});
export default rootReducer;
