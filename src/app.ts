import cors from 'cors';
import express, { Express, Response } from 'express';

import { createFirebaseUser } from 'src/middlewares/firebase';
import SuperAdmin from 'src/models/super-admin';

import { Role } from './interfaces';
import handleError from './middlewares/error-handler/error-handler.middleware';
import router from './routes';

const app: Express = express();

app.use(express.json({ limit: '10mb' }));

app.use(cors());

app.post('/create-superadmin', createFirebaseUser(Role.SUPERADMIN), async (req, res) => {
  try {
    const superAdmin = new SuperAdmin(req.body);
    const result = await superAdmin.save();

    res.json({ mensaje: 'ok', result });
  } catch (error) {
    res.json({ error });
  }
});

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
