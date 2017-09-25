import * as actions from './type_actions';
import MessageApi from '../apis/MessageApi';

export const sendMessage = (message) => {
  return (disparch) => {
    return MessageApi.sendMessage(message)
      .then((body) => {
        disparch({
          type: actions.SUCCESS,
          message: body,
        });
      }).catch((error) => {
        disparch({
          type: actions.ERROR,
          message: error.message || 'Something bad happened',
        });
      });
  };
};

export const allMessages = () => {
  return (disparch) => {
    return MessageApi.messges()
      .then((body) => {
        disparch({
          type: actions.FETCH,
          messages: body,
          isLoad: false,
        });
      }).catch((error) => {
        disparch({
          type: actions.ERROR,
          message: error.message || 'Something bad happened',
          isLoad: false,
        });
      });
  };
};
