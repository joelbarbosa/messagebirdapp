import RoutesAdapter from './routes_adapter';
import { wrapGenerator, callParallelFunctions } from '../utils/functions_utils';
import MessageBirdErrorHandle from '../utils/MessageBirdErrorHandle';
import Log from '../config/winston';
import genericApi from '../apis/api';
import messageApi from '../apis/message/api/message_api';

/**
 * routes configurations
 * @param {server} app 
 */
const init = (app) => {

  const allRoutesApis = [
    genericApi(app),
    messageApi(app)
  ];

  callParallelFunctions(allRoutesApis)
    .catch(error => {
      Log.warn(`Some api has not been started: ${error}`);
    });
};

export default { init };