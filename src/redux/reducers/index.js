import { combineReducers } from "redux";
import counts from "./countReducer";

const rootReducer = combineReducers({
  counts
});

export default rootReducer;
