import { finished } from 'stream';
import { Request, Response, NextFunction } from 'express';
import logger from './moduleLogger';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { method, url, body, query } = req;
  const start = Date.now();

  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;
    logger.info(
      `method: ${method}, URL: ${decodeURI(
        url
      )}, query parameters: ${JSON.stringify(
        query
      )}, request body: ${JSON.stringify(
        body
      )}, ${statusCode}, [${ms}ms]`
    );
  });
};

export default loggerMiddleware;