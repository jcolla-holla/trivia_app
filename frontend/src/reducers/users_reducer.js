import {
  RECEIVE_USER,
  RECEIVE_USER_SCORES
} from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
        if (!newState[action.user.data._id]) {
          newState[action.user.data._id] = action.user.data;
        } 
      return newState;
    case RECEIVE_USER_SCORES:
      newState[action.scores] = action.scores.data
    default:
      return state;
  }
};

export default UsersReducer;
