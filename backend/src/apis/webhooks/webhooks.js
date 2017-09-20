// jshint ignore: start
import WebHooks from 'node-webhooks';
const promisifyAll = require('callback-and-promise/all');
import Log from '../../config/winston.js';

const webhooksApi = app => {
  
  const webHooks = new WebHooks({
    db: './webHooksDB.json',
    httpSuccessCodes: [200, 201, 202, 203, 204],
  });

  const webHooksAsync = promisifyAll(webHooks, {}, [
    'trigger',
  ]);

  // sync instantation - add a new webhook called 'shortname1'
  webHooks.add('sms_received', process.env.REST_MESSAGE).then(() => {
	  Log.info('Call webhook: sms');
  }).catch(err => {
	  Log.error('Error on call webhook: sms');
  });

  const emitAsyncHook = (hook, data = {}) => {
    return webHooksAsync.trigger(hook, data);
  }
  
  return {
    webHooks,
    emitAsyncHook
  }
}

export default webhooksApi;