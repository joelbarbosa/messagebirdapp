import * as types from '../actions/type_actions';

function alertReducer(state = null, action) {
  const { type } = action;

  if (type === types.ERROR || types.SUCCESS) {
    return { ...action };
  } else if (type === types.RESET_ALERT_MESSAGE) {
    return state;
  }
  return state;
}

export default alertReducer;
