// exported to root-reducer, which stores all reducers as a single standardized combineReducers object

import { USER_ACTION_TYPES } from "./user.types";

export const userReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // returns new state object which is generated
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
