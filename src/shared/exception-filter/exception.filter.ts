import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // const ctx = host.switchToHttp();
    // const response = ctx.getResponse();
    // const request = ctx.getRequest();
    // let status = exception.getStatus();

    // if (!status) {
    //     status = 400;
    // }

    // response
    //   .status(status)
    //   .json({
    //     statusCode: status,
    //     timestamp: new Date().toISOString(),
    //     path: request.url,
    //   });
  }
}