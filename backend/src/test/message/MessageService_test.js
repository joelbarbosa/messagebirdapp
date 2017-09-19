import assert from 'assert';
import { should } from 'chai';
import messageService from '../../apis/message/services/MessageService';
should();

describe('MessageService', () => {

    it('#createMessageBird should send messageBird without errors', (done) => {
      const message = {
        "originator": "MessageBird",
        "recipients": [
          "31612345678"
        ],
        "body": "This is a test message."
      };

      let promise = messageService.createMessageBird(message);
      promise.then((result) => {
        result.should.all.have.property('id');
        done();
      });
    });

});