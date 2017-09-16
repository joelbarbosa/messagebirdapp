/* jshint ignore:start */
import mongoose from 'mongoose';
mongoose.Promise = Promise;

const init = (config) => {
  return mongoose.connect(config.databaseURL, 
    { useMongoClient: true })
    .then(
      () => { 
        console.log("Database connection ready");      
      },
      err => {
        console.log('Error on connect database');
        process.exit(1);
      }
    ).catch(error => {
      console.log('catch ' + err);
      process.exit(1);
    });

  process.on('SIGINT', function() {
    return mongoose.connection.close(function () {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
  });
};

export default { init };