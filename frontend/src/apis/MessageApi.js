import { MESSAGE_API } from './application_api_urls';
import axios from 'axios';

class MessageApi {

  static sendMessage(message) {
    return axios.post(MESSAGE_API.SEND_MESSAGE, message)
      .then(({data}) => {
        return data;
      });
  }
}

export default MessageApi;