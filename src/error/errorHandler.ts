import { NextFunction, Request, Response } from "express";
import logger from '../logger/moduleLogger';

interface errHanler extends Error {
	name: string;
  message: string;
  stack?: string;
	status?: number;
}

const errorHandler = (err: errHanler, req: Request, res: Response, _next: NextFunction) => {
	logger.error(`method: ${req.method}, URL: ${decodeURI(
        req.url
      )}, query parameters: ${JSON.stringify(
        req.query
      )}, request body: ${JSON.stringify(
        req.body
      )}, ${err.status}, message: ${err.message}`);

	res.status(err.status || 500).send({
      error: {
        status: err.status || 500,
        message: err.message || 'Internal Server Error',
      },
    });
};

export default errorHandler;