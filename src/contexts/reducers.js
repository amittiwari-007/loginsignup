// reducers/index.js
import { combineReducers } from 'redux';
import TodoReducer from "./reducers/TodoReducer"

const rootReducer = combineReducers({
  TodoReducer,
});

export default rootReducer;
