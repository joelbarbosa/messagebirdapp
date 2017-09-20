import * as actions from './type_actions';
import MessageApi from '../apis/MessageApi';

export const sendMessage = (message) => {
  return (disparch) => {
    return MessageApi.sendMessage(message)
    .then(body => (body))
    .then(({ data }) => {            
      disparch({
        type: actions.SENT,
        message: data
      });      
    }).catch(error => {
      console.log(new Error(error));
      disparch({
        type: actions.ERROR,
        error: error
      });
    });
  }
}