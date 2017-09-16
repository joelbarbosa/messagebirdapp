import MessageBirdErrorHandle from '../utils/MessageBirdErrorHandle';

const RoutesAdapter = (request, response) => {
  const req = request;
  const res = response;
  
  /** 
   * @param {*} objectJson
   */
  const asyncResponse = (objectJson) => {
    return new Promise((resolve, reject) => {
      resolve(res.status(200).json(objectJson));
    });
  }

  return {
    asyncResponse: asyncResponse
  }
}

export default RoutesAdapter;