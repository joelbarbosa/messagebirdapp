import assert from 'assert';
import { should } from 'chai';
import messageService from '../../apis/message/services/MessageService';
should();

describe('MessageService', () => {

    it('#createMessageBird should send messageBird without errors', (done) => {
      const message = {
        "originator": "5585988127241",
        "recipients": [
          "5585988127241"
        ],
        "body": "This is a test message Joel."
      };

      let promise = messageService.createMessageBird(message);
      promise.then((result) => {
        result.should.all.have.property('id');
        done();
      });
    });

});