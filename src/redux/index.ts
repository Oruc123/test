import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import watchFetchPosts from "./sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchFetchPosts);
export default store;
