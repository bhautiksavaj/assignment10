import { combineReducers } from "redux";
import tasks from "./tasks";
import { userLogin } from "./userLogin";

export default combineReducers({
  tasks,
  isLoggedIn: userLogin,
});
