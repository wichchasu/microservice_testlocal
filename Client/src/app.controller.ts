import { Body, Controller, Get, Inject, Post, Type } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';


@Controller()
export class AppController {
  constructor(
    @Inject('MATH_SERVICE')
    private mathService: ClientProxy,
    @Inject('STRING_SERVICE')
    private stringService: ClientProxy,

    private readonly appService: AppService
  ) {}
  
  @Post('sum')//  domain/sum
  sum(@Body() { data }): Observable<Type> {
    return this.mathService.send({ cmd: 'sum' }, data);
  }
 
  @Post('join')
  join(@Body() { data }): Observable<Type>{
    return this.stringService.send({ cmd: 'join' }, data);
  }

  @Get('hello')
  hello(@Body() { data }): Observable<Type>{
    // console.log(data);
    // console.log('in hello');
    return this.mathService.send({ cmd: 'hello2' }, data);
  }
  @Post('add')
  addMathData(@Body() data: any): Observable<any> {
    // ส่งข้อมูลไปยัง Math-service
    return this.mathService.send({ cmd: 'add_math_data' }, data);
  }

  @Post('adds')
  addStringData(@Body() data: any): Observable<any> {
    // ส่งข้อมูลไปยัง Math-service
    return this.mathService.send({ cmd: 'add_string_data' }, data);
  }  

  @Post('addsus')
  addSusData(@Body() data: any): Observable<any> {
    // ส่งข้อมูลไปยัง Math-service
    return this.mathService.send({ cmd: 'add_sus_data' }, data);
  }

 }
