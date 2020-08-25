import { combineReducers } from "redux";
import session from "./session_reducer";
import questions from "./questions_reducer";
import errors from "./errors_reducer";
import scores from "./scores_reducer";

const RootReducer = combineReducers({
  session,
  questions,
  errors,
  scores
});

export default RootReducer;
