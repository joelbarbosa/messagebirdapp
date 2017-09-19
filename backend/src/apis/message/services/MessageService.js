import BaseService from  '../../utils/BaseService';
import MessageModel from '../models/MessageSchema';
import MessageBirdAdapter from '../../messagebird/messagebird_api';
import { isNull, wrongData } from '../../utils/api_utils';

class Messagervice extends BaseService {

  constructor(MessageModel) {
    super(MessageModel);    
  }

  mountUser({ message }) {
    return new MessageModel(message);
  }

  createMessageBird(message) {
    if (isNull(message)) {
      return { status: wrongData() };
    }
    return MessageBirdAdapter().create(message);
  }

}

const messageService = new Messagervice(MessageModel);
export default messageService;