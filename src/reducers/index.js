import { combineReducers } from "redux";
import { postMessage } from "./PostMessage.reducers";

export const reducers = combineReducers({
  postMessage,
});
