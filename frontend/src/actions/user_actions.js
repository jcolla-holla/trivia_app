import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_SCORES = "RECEIVE_USER_SCORES";

export const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});


export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveUserScores = (scores) => {
  return {
    type: RECEIVE_USER_SCORES,
    scores,
  };
};

export const getUser = (id) => (dispatch) => {
  APIUtil.getUser(id)
    .then((user) => dispatch(receiveUser(user)))
    .catch((err) => console.log(err));
};

export const getUserScores = (userId) => (dispatch) => {
  APIUtil.getUserScores(userId)
    .then((scores) => dispatch(receiveUserScores(scores)))
    .catch((err) => console.log(err));
};

