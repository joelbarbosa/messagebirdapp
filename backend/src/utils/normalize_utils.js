import MessageBirdErrorHandle from 'utils/MessageBirdErrorHandle';

/**
 * @return {number} port
*/
const normalizeToDecimal = (val) => {
    const DEFAULF_DECIMAL = 10;
    let port = parseInt(val, DEFAULF_DECIMAL);
  
    if (isNaN(port) || port <= 0) {
      throw new MessageBirdErrorHandle("Please, provide a correct port");
    }

    return port;
  }

export { normalizeToDecimal }