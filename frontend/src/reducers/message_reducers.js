import * as types from '../actions/type_actions';

const initialOrderState = {
  messages: [],
  message: {},
  type: null,
  isLoad: true,
};

const messageReducer = (state = initialOrderState, action) => {
  switch (action.type) {
  case types.SUCCESS:
  case types.FETCH:
    return {
      ...state,
      ...action,
    };
  default:
    return state;
  }
};

export default messageReducer;
