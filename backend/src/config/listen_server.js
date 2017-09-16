/**
 * Dealing service events listeners
 */
const onListening = serverAddress => {
  console.info(`Application listening on port ${serverAddress.port}`);
}

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`require elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`port is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

export { 
  onListening,
  onError
}