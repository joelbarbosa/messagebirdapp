import RoutesAdapter from '../config/routes_adapter';
import { wrapGenerator } from '../utils/functions_utils';

const genericApi = app => {
  
   /**
   * @api {get} / Request index information
   * 
   * @apiSuccess {json} status Server is working.
   * 
   * @apiSuccessExemple {json} Success
   *   HTTP/1.1 200 OK
   *     {
   *       "status": "Server is working"
   *     }
   */
  app.get('/', wrapGenerator(function *(req, res) {
    yield RoutesAdapter(req, res).asyncResponse({ status: 'Server is working' });
  }));

}

export default genericApi;