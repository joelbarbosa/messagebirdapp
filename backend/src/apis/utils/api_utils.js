const isNull = (object) => {
  if (object === null || object === undefined || object === '') {
    return true;
  }
  return false;
}

const wrongDataAsync = (message = 'You send wrong data') => 
  new Promise((resolve) => resolve({ status: message }));

export {
  isNull,
  wrongDataAsync
};