import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './models/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/express'),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
