import RoutesAdapter from 'config/routes_adapter';
import { wrapGenerator, callParallelFunctions } from 'utils/functions_utils';
import messagervice from '../services/Messageservice';
import webhooksApi from '../../webhooks/webhooks';

const messageApi = app => {
  
  app.post(
    '/sendMessage',
    wrapGenerator(function *(req, res) {
      const { message } = req.body;
      yield RoutesAdapter(req, res).
        asyncResponse(yield messagervice.saveAndValidate(
          yield messagervice.createMessageBird(message)));
    })
  ).post(
    '/message',
    wrapGenerator(function *(req, res) {
      const message = req.body;
      yield RoutesAdapter(req, res)
        .asyncResponse(yield messagervice.saveAndValidate(message));     
    })
  ).get(
    '/messagesById',
    wrapGenerator(function *(req, res) {
      const { idSMS } = req.body;
      yield RoutesAdapter(req, res)
        .asyncResponse(yield messagervice.readSMSByID(idSMS));     
    })
  ).get(
    '/messages',
    wrapGenerator(function *(req, res) {
      yield RoutesAdapter(req, res)
        .asyncResponse(yield messagervice.findAllSMS( yield messagervice.findAll()));
    })
  ).post(
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