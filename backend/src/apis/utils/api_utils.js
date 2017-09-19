const isNull = (object) => {
  if (object === null || object === undefined || object === '') {
    return true;
  }
  return false;
}

const wrongData = (message = 'You send wrong data') => message;

export { 
         isNull,
         wrongData
       };