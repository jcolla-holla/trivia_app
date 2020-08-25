import {
  RECEIVE_SCORE,
  RECEIVE_ALL_SCORES,
  RECEIVE_TOP_TEN_SCORES,
} from "../actions/score_actions";

const ScoresReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_SCORES:
      newState.allScores = action.scores.data;
      return newState;
    case RECEIVE_TOP_TEN_SCORES:
      newState.topTen = action.scores.data;
      return newState;
    case RECEIVE_SCORE:
      newState.singleScore = action.score.data;
      return newState;
    default:
      return state;
  }
};

export default ScoresReducer;
