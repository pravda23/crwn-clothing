import { compose, applyMiddleware } from "redux";
import { createStore } from "@reduxjs/toolkit";

// enables redux console logging; grayed out due to loggerMiddleware function below
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// curried functions are function generators, returning new dynamically created functions

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    // in this case, we avoid any modification of the action and simply pass it on to the next middleware function in the chain
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  // next() updates reducers, which update store object which calls useSelector on all components
  next(action);
  console.log("next state: ", store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// createStore is deprecated
export const store = createStore(rootReducer, undefined, composedEnhancers);
