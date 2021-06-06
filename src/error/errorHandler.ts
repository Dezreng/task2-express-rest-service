import { NextFunction, Request, Response } from "express";

interface errHanler extends Error {
	name: string;
  message: string;
  stack?: string;
	status?: number;
};

const errorHandler = (err: errHanler, _req: Request, res: Response, _next: NextFunction) => {
	res.status(err.status || 500).send({
      error: {
        status: err.status || 500,
        message: err.message || 'Internal Server Error',
      },
    });
};

export default errorHandler;