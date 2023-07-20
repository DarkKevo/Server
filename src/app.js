import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { router } from './routes/index.js';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

export const app = express();

app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);
