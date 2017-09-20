import { combineReducers } from 'redux';
import messageReducer from './message_reducers';

const rootReducers = combineReducers({
  messageReducer
});

export default rootReducers;