import {
  RECEIVE_USER,
} from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
        // 
        if (!newState[action.user.data._id]) {
          newState[action.user.data._id] = action.user.data;
        } 
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
