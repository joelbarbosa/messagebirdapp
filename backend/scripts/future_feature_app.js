import winston from 'winston';

/**
 * Future feature is a file where you will put
 * new things to be implemented in the future.
 * This will helpe the team study about.
 */
const featureApp = (() => {
  winston.info(`
    Future feature to help improve the app
    
    1. Use something like pm2 for production.
    2. Implementing Cluster for speeding up app.
  
    * It only appear in development
  `);
})();

export default featureApp;