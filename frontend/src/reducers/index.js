import { combineReducers } from 'redux';
import messageReducer from './message_reducers';
import alertReducer from './alert_reducers';

const rootReducers = combineReducers({
  messageReducer,
  alertReducer,
});

export default rootReducers;
