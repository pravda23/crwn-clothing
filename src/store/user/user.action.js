// reminder: actions set reducers

import { USER_ACTION_TYPES } from "./user.types";

import { createAction } from "../../utils/reducer/reducer.utils";

// dispatch is similar to setState; sends the data for the reducer action to run, which triggers an update/refresh
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
