// jshint ignore: start
const messagebird = require('messagebird')(process.env.MSG_BIRD_YOUR_ACCESS_KEY);
const promisifyAll = require('callback-and-promise/all');
const messages = promisifyAll(messagebird.messages, {}, [
    'create',
]);

const MessageBirdAdapter = () => {
  const create = (params) => {
    return messages.create(params)
      .then(resolver => {
        return resolver;
      });
  }
  return {
    create: create
  }
}

export default MessageBirdAdapter;