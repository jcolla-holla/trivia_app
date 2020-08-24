import {
  RECEIVE_QUESTIONS,
} from "../actions/questions_actions";

const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)

    // debugger
    // check what newState is 

    switch (action.type) {
      case RECEIVE_QUESTIONS:
        newState.questions = action.questions;
      default:
        return state;
    }
}

export default QuestionsReducer;