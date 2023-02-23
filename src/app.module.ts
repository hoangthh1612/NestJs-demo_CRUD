import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmAsyncConfig, typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, 
  TypeOrmModule.forRoot(typeOrmConfig),
  ConfigModule.forRoot({isGlobal: true}),
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule { }
