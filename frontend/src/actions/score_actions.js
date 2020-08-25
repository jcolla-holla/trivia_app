import * as APIUtil from "../util/score_api_util";

export const RECEIVE_SCORE_ERRORS = "RECEIVE_SCORE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ALL_SCORES = "RECEIVE_ALL_SCORES";
export const RECEIVE_TOP_TEN_SCORES = "RECEIVE_TOP_TEN_SCORES";
export const RECEIVE_SCORE = "RECEIVE_SCORE";

export const receiveErrors = (errors) => ({
  type: RECEIVE_SCORE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveScores = (scores) => {
  return {
    type: RECEIVE_ALL_SCORES,
    scores,
  };
};

export const receiveTopTenScores = (scores) => {
  return {
    type: RECEIVE_TOP_TEN_SCORES,
    scores,
  };
};

export const receiveScore = (score) => {
    return {
        type: RECEIVE_SCORE,
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
      .then((scores) => dispatch(receiveTopTenScores(scores)))
      .catch((err) => console.log(err));
}





