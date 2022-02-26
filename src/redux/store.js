import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as globalReducer } from './globalRedux';

/* DEFINE REDUCERS */
const reducers = {
  globalData: globalReducer,
};

const combinedReducers = combineReducers(reducers);

/* CREATE STORE */
export const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
