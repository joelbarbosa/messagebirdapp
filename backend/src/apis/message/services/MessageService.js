import BaseService from  '../../utils/BaseService';
import MessageModel from '../models/MessageSchema';
import MessageBirdAdapter from '../../messagebird/messagebird_api';
import { isNull, wrongDataAsync } from '../../utils/api_utils';

class Messagervice extends BaseService {

  constructor(MessageModel) {
    super(MessageModel);    
  }
 
  /**
   * Just to not need import Model
   * @param {*} message 
   */
  mountUser(message) {
    return new MessageModel(message);
  }
  
  saveAndValidate(message) {
    return isNull(message) ? wrongDataAsync() :
      this.save(this.mountUser(message));
  }

  createMessageBird(message) {
    return isNull(message) ? wrongDataAsync() :
      MessageBirdAdapter().create(message);
  }

  readSMSByID(id) {
    console.log(id)
    return isNull(id) ? wrongDataAsync() :
      MessageBirdAdapter().read(id);
  }
  
  /**
   * I have not seen a way to fetch all messages
   * in the api.
   * @param {*} messages 
   */
  findAllSMS(messages) {
    return Promise.all(
      messages.map(sms => {
        return MessageBirdAdapter().read(sms.id);
      })
    ).then(result => result );
  }

}

const messageService = new Messagervice(MessageModel);
export default messageService;