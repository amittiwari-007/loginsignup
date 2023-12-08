// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // create this file

const store = createStore(
  rootReducer,
  applyMiddleware()
);

export default store;
