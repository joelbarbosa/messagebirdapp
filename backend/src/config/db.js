/* jshint ignore:start */
import mongoose from 'mongoose';
import Log from './winston';
mongoose.Promise = Promise;

const init = () => {
  return mongoose.connect(process.env.DB, 
    { useMongoClient: true })
    .then(
      () => { 
        Log.info('Database connection ready');
        close();    
      },
      err => {
        Log.error('Error on connect database: ' + err);
        process.exit(1);
      }
    ).catch(error => {
      Log.error('Error ' + err);
      process.exit(1);
    });
};

const close = () => {
  process.on('SIGINT', () => {
    return mongoose.connection.close(() => {
      Log.info('Mongoose disconnected on app termination');    
      process.exit(0);
    });
  });
}

export default { init, close };