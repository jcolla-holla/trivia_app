import * as APIUtil from "../util/score_api_util";

export const RECEIVE_SCORE_ERRORS = "RECEIVE_SCORE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_SCORES = "RECEIVE_SCORES";

export const receiveErrors = (errors) => ({
  type: RECEIVE_SCORE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveScores = (scores) => {
  return {
    type: RECEIVE_SCORES,
    scores,
  };
};

export const receiveScore = (score) => {
    return {
    type: RECEIVE_SCORES,
    score,
    };
}

export const createScore = (data) => (dispatch) => {
  return APIUtil.createScore(data)
    .then((score) => dispatch(receiveScore(score)))
    .catch((err) => console.log(err));
};

export const getScores = () => (dispatch) => {
    APIUtil.getScores()
    .then((scores) => dispatch(receiveScores(scores)))
    .catch((err) => console.log(err));
}

export const getTopTenScores = () => (dispatch) => {
    APIUtil.getTopTenScores()
    .then((scores) => dispatch(receiveScores(scores)))
    .catch((err) => console.log(err));
}





