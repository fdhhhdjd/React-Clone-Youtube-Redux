import { combineReducers } from "redux";
import authReducer from "./Reducer/AuthReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;
