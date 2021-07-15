import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import * as fs from 'fs';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const status = exception.getStatus();

    const errorRespons = {
      code: status,
      timestamp: new Date().toLocaleDateString(),
      path: req.url,
      method: req.method,
      message: exception.message || null,
    };

    Logger.error(
      `${req.method} ${req.url}`,
      JSON.stringify(errorRespons),
      'ExceptionFilter',
    );

    fs.appendFileSync(
      'src/loggerFile/error.log',
      JSON.stringify(errorRespons) + '\n',
    );

    res.status(status).json(errorRespons);
  }
}
