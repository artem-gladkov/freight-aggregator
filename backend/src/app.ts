import express from 'express';
import * as process from 'process';
import cors from 'cors';
import { ordersRouter } from './routes/orders';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', ordersRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join('../', 'frontend', 'dist')));

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`));

export default app