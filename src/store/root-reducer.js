// receives all reducers and exports them as a single standardized combineReducers object

import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

import { categoriesReducer } from "../store/categories/category.reducer";

// produces a new store object with every update
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
