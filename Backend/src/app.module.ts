import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrendsModule } from './models/trend/trend.module';
import { TweetsModule } from './models/tweet/tweet.module';
import { UsersModule } from './models/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/twitter'),UsersModule,TweetsModule,TrendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
