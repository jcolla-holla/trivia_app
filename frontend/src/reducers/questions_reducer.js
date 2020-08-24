import {
  RECEIVE_QUESTIONS,
} from "../actions/questions_actions";

const QuestionsReducer = (state = [], action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)

    switch (action.type) {
      case RECEIVE_QUESTIONS:
        newState = action.questions.data.results;
        return newState;
      default:
        return state;
    }
}

export default QuestionsReducer;