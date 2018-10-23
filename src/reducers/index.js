import { combineReducers } from "redux";
import balance from "./balance";
import bitcoin from "./bitcoin";

// automagical mapping
export default combineReducers({ balance, bitcoin });
