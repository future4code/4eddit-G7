import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import postsReducer from "./post";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    // Outros reducers aqui
    posts: postsReducer
  });
