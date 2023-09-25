import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import donorReducer from '../store/reducer/donorReducer'

const rootReducer = combineReducers({
  donor: donorReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
