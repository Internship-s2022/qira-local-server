import cors from 'cors';
import express, { Express, Response } from 'express';

import handleError from './middlewares/error-handler/error-handler.middleware';
import router from './routes';

const app: Express = express();

app.use(express.json({ limit: '10mb' }));

app.use(cors());

app.use('/', router);

app.use(handleError);

app.get('/', (_req, res: Response) => {
  res.status(200).send({
    message: 'Server is up ✅ - Environment: ' + process.env.ENV,
    data: undefined,
    error: false,
  });
});

export default app;
