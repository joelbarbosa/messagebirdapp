// jshint ignore: start
import MessageBirdErrorHandle from 'utils/MessageBirdErrorHandle';
const messagebird = require('messagebird')(process.env.MSG_BIRD_YOUR_ACCESS_KEY);
const promisifyAll = require('callback-and-promise/all');
const messages = promisifyAll(messagebird.messages, {}, [
    'create',
    'read',
]);

const MessageBirdAdapter = () => {
  const create = (params) => {
    return messages.create(params)
      .then(resolver => {
        return resolver;
      }).catch(error => {
        return new MessageBirdErrorHandle(error);
      });
  }
  
  const read = (id) => {
    return messages.read(id)
      .then(resolver => {
        return resolver;
      }).catch(error => {
        return new MessageBirdErrorHandle(error);
      });
  }

  return {
    create: create,
    read: read,

  }
}

export default MessageBirdAdapter;