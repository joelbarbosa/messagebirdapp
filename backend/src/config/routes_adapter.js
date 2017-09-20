import MessageBirdErrorHandle from '../utils/MessageBirdErrorHandle';

const RoutesAdapter = (request, response) => {
  const req = request;
  const res = response;
  
  /** 
   * objectJson
   * oprions {HTTP_STATUS_CODE: ?}
   * @param {*} objectJson
   * @param {*} 
   */
  const asyncResponse = (objectJson = { status: 'success' }, oprions = { HTTP_STATUS_CODE: 200 }) => {
    return new Promise(() => {
      return res.status(oprions.HTTP_STATUS_CODE).json(objectJson);
    }).catch(err => {
      return res.status(500).json({ status: 'error' });
    });
  }

  return {
    asyncResponse: asyncResponse
  }
}

export default RoutesAdapter;