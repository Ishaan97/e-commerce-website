import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga"


import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

//! Commenting the middlewares so that they dont execute in
//! Production Env.

// const sagaMiddleware = createSagaMiddleware();
const middlewares = []; //[logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};
