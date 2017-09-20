import * as types from '../actions/type_actions';

const initialOrderState = {
  message: []
}

const messageReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case types.SENT:
      return { ...state, payload: action };
    default:
      return state;
  }
}

export default messageReducer;