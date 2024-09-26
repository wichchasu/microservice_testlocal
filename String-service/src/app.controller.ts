import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger;
  constructor(private readonly appService: AppService) {
    this.logger = new Logger('StringService');
  }

  @MessagePattern({ cmd: 'join' })
  join(data: string[]): string {
    const result = (data || []).join('-');
    this.logger.log('join has call result : ' + result);
    return result;
  }
 }
