import _Promise from 'bluebird';
import MessageBirdErrorHandle from './MessageBirdErrorHandle';
/** 
 * @param {*} functions 
 */
const callParallelFunctions = (fns) => { 
  if (!Array.isArray(fns)) {
    throw new MessageBirdErrorHandle('only array of functions');
  }
  return Promise.all(fns)
  .catch(err => new MessageBirdErrorHandle(err));
}

/**
 * functions generators to resolve with Promise.coroutine
 * @param {*} generatorsFn 
 */
const wrapGenerator = (generatorsFn) => {
  const cr = _Promise.coroutine(generatorsFn);
    return function(req, res, next) {
      cr(req, res, next).catch(next);
    }
}

export { 
  callParallelFunctions, 
  wrapGenerator 
}