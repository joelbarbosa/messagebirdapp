import axios from 'axios';
import { MESSAGE_API } from './application_api_urls';

class MessageApi {
  static sendMessage(message) {
    return axios.post(MESSAGE_API.SEND_MESSAGE, message)
      .then(({ data }) => data);
  }

  static messges() {
    return axios.get(MESSAGE_API.MESSAGES).then(({ data }) => data);
  }
}

export default MessageApi;
