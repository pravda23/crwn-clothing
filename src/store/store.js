import { compose, applyMiddleware } from "redux";
import { createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// createStore is deprecated
export const store = createStore(rootReducer, undefined, composedEnhancers);
