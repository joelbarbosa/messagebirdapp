import express from 'express';
import compression from 'compression';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import queryParse from 'express-query-int';
import helmet from 'helmet';
import routes from './routes';
import corsOptions from './cors';
import db from './db';
import MessageBirdErrorHandle from '../utils/MessageBirdErrorHandle'; 
import { 
  callParallelFunctions,
  callChainFunctions
} from '../utils/functions_utils';

const app = express();

const appConfig = expressApp => {
  expressApp.use(compression());
  expressApp.use(cors(corsOptions));
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  expressApp.use(bodyParser.json());
  expressApp.use(queryParse());
  expressApp.use(cookieParser());
  expressApp.use(helmet());
  expressApp.use(new MessageBirdErrorHandle()._genericErrorHandle());
}

const startApplicationServices = [
  db.init(),
  appConfig(app),
  routes.init(app)
];

callChainFunctions(startApplicationServices)
  .catch(reason => {
    new MessageBirdErrorHandle('Error on start application')
      ._logConsole(reason);
  });

export { app };