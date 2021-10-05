import { combineReducers } from "redux";
import todoReducer from "./Reducer";

const rootReducer = combineReducers({
  data: todoReducer,
});
export default rootReducer;
