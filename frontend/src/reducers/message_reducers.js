import * as types from '../actions/type_actions';

const initialOrderState = {
  message: {},
  type: null,
};

const messageReducer = (state = initialOrderState, action) => {
  switch (action.type) {
  case types.SUCCESS:
    return {
      ...state,
      ...action,
    };
  default:
    return state;
  }
};

export default messageReducer;
