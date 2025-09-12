import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { StatusCodes } from 'http-status-codes';
import swaggerUi from 'swagger-ui-express';
import openapi from './docs/openapi.json' assert { type: 'json' };
import { router as apiRouter } from './routes/index.js';

export const app = express();

app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.status(StatusCodes.OK).json({ status: 'ok' });
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapi));

app.use('/api', apiRouter);

// 404 handler
app.use((_req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: 'Not Found' });
});

// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
});


