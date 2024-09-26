import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MathEntity } from './math/math.entity';
import { MathService } from './math/math.service';
import { StringService } from './string/string.service';
import { StringEntity } from './string/string.entity';
import { SusService } from './sus/sus.service';
import { SusController } from './sus/sus.controller';
import { SusEntity } from './sus/sus.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'rootpassword',
      database: 'defaultdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ใช้เฉพาะใน development ห้ามใช้ใน production
    }),
    TypeOrmModule.forFeature([MathEntity,StringEntity,SusEntity])
  ],
  controllers: [AppController, SusController],
  providers: [AppService, MathService, StringService, SusService],
})
export class AppModule {}
