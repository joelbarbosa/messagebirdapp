import RoutesAdapter from '../../../config/routes_adapter';
import { wrapGenerator } from '../../../utils/functions_utils';
import messagervice from '../services/Messageservice';

const messageApi = app => {
  
  app.post(
    '/message',
    wrapGenerator(function *(req, res) {
      const { message } = req.body;
      yield RoutesAdapter(req, res)
        .asyncResponse(messagervice.createMessageBird(message));     
    })
  );

}

export default messageApi;