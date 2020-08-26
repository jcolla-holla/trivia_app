import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});


export const receiveScore = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const getUser = (userId) => (dispatch) => {
  APIUtil.getUser(userId)
    .then((user) => dispatch(getUser(user)))
    .catch((err) => console.log(err));
};

