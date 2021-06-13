import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import errorHandler from './error/errorHandler';
import ErrorNotFound from './error/errorNotFound';
import loggerMiddleware from './logger/middlewareLogger';
import logger from './logger/moduleLogger';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(loggerMiddleware);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardIdParam/tasks', taskRouter);

app.use((_req, _res, next) => {
  const error = new ErrorNotFound("This request does not exist!");
  next(error);
});

process.on('uncaughtException', (error) => {
	logger.error(`captured error: ${error.message}`, error);
	setTimeout(() => {process.exit(1);}, 100);
});

process.on('unhandledRejection', (reason) => {
	logger.error(`captured error ${reason}`);
	setTimeout(() => {process.exit(1);}, 100);
});

// error handler middleware
app.use(errorHandler);

export default app;