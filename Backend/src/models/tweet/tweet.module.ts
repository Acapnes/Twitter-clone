import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet, TweetSchema } from 'src/schemas/tweet.schema';
import { TweetsController } from './tweet.controller';
import { TweetsService } from './tweet.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }])],
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}