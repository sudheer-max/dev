import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

export const middlewares = [thunk, sagaMiddleWare, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSaga);
export default store;