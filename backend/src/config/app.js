import express from 'express';
import compression from 'compression';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from '../../config/config';
import routes from './routes';
import cors from 'cors';
import corsOptions from './cors';
import queryParse from 'express-query-int';
import db from './db';
import MessageBirdErrorHandle from '../utils/MessageBirdErrorHandle'; 
import { callParallelFunctions } from '../utils/functions_utils';

const app = express();

const appConfig = (expressApp) => {
  expressApp.use(compression);
  expressApp.set('port', config.port);
  expressApp.use(cors(corsOptions));
  expressApp.use(bodyParser.json());
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  expressApp.use(queryParse());
  expressApp.use(cookieParser());
  expressApp.use(new MessageBirdErrorHandle()._genericErrorHandle());
}

const startApplicationServices = [
  db.init(config),
  routes.init(app),
  appConfig(app)
];

callParallelFunctions(startApplicationServices);

export { app };