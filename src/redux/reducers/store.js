import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { currentBookReducer } from "./currentBookReducer";
import { searchQueryReducer } from "./searchQueryReducer";

const reducers = combineReducers({ currentBookReducer, searchQueryReducer });

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
