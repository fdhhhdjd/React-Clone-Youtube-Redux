import { combineReducers } from "redux";
import { authReducer, homeVideosReducer } from "./Reducer/AuthReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
});
export default rootReducer;
