import RoutesAdapter from '../../../config/routes_adapter';
import { wrapGenerator, callParallelFunctions } from '../../../utils/functions_utils';
import messagervice from '../services/Messageservice';
import webhooksApi from '../../webhooks/webhooks';

const messageApi = app => {
  
  app.post(
    '/sendMessage',
    wrapGenerator(function *(req, res) {
      const { message } = req.body;
      yield RoutesAdapter(req, res)
        .asyncResponse(messagervice.createMessageBird(message));     
    })
  );

  app.post(
    '/message',
    wrapGenerator(function *(req, res) {
      const message = req.body;
      yield RoutesAdapter(req, res)
        .asyncResponse(messagervice.saveAndValidate(message));     
    })
  );

  app.post(
    '/webhook/message',
    wrapGenerator(function *(req, res) {
      const { message } = req.body
      yield callParallelFunctions([
        webhooksApi(app).emitAsyncHook('sms_received', message),
        RoutesAdapter(req, res).asyncResponse()
      ]);   
    })
  );

}

export default messageApi;