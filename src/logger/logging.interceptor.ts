import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as fs from 'fs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const method = req.method;
    const url = req.url;
    const now = Date.now();

    fs.appendFileSync(
      'src/loggerFile/logs.log',
      `${method} ${url} Query params: ${JSON.stringify(
        req.query,
      )} Body params: ${JSON.stringify(req.body)} Respons Status code: ${
        res.statusCode
      } Time finished: ${Date.now() - now}ms` + '\n',
    );

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log(
            `${method} ${url} Query params: ${JSON.stringify(
              req.query,
            )} Body params: ${JSON.stringify(req.body)} Respons Status code: ${
              res.statusCode
            } Time finished: ${Date.now() - now}ms`,
            context.getClass().name,
          ),
        ),
      );
  }
}
