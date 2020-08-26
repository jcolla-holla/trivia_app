import { combineReducers } from "redux";
import session from "./session_reducer";
import questions from "./questions_reducer";
import errors from "./errors_reducer";
import scores from "./scores_reducer";
import user from "./user_reducer";

const RootReducer = combineReducers({
  session,
  questions,
  scores,
  user,
  errors,
});

export default RootReducer;
