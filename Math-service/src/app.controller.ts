
import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math/math.service';
import { StringService } from './string/string.service';
import { SusService } from './sus/sus.service';



@Controller()
export class AppController {
  private mathLogger: Logger;
  private stringLogger: Logger;
  private susLogger: Logger;

  constructor(
    private  appService: AppService ,
    private  mathService: MathService,
    private  stringService: StringService,
    private  susService: SusService

  ) {
    this.mathLogger = new Logger('MathService');
    this.stringLogger = new Logger('StringService');
    this.susLogger = new Logger('SusService');
  }

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    const result = (data || []).reduce((a, b) => a + b);
    this.mathLogger.log('accumulate has call result : ' + result);
    return result;
  }


  @MessagePattern({ cmd: 'hello2' })
  testhello(){
    return this.appService.getHello();
  } 
  
  @MessagePattern({ cmd: 'add_math_data' })
  addMathData(data: any): Promise<any> {
    this.mathLogger.log('Received addMathData with data: ' + JSON.stringify(data));
    return this.mathService.create(data);
  }

  @MessagePattern({ cmd: 'add_string_data' })
  addStringData(data: any): Promise<any> {
    this.stringLogger.log('Received addStringData with data: ' + JSON.stringify(data));
    return this.stringService.create(data);
  }
  @MessagePattern({ cmd: 'add_sus_data' })
  addSusData(data: any): Promise<any> {
    console.log(data);
    this.susLogger.log('Received addStringData with data: ' + JSON.stringify(data));
    return this.susService.create(data);
  }



 }
