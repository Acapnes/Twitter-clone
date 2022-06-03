import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImgDto } from "src/dto/other/img.dto";
import { TweetDto } from "src/dto/tweets/tweet.dto";
import { Tweet } from "src/schemas/tweet.schema";
import { TweetsService } from "./tweet.service";


@Controller("/tweet")
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) { }

  @Get()
  async getTweets(): Promise<Tweet[]> {
    return this.tweetsService.getAll();
  }

  @Get(':userId')
  async getTweetsByUserId(@Param(':userId') userId: string): Promise<Tweet[]> {
    return this.tweetsService.getTweetsById(userId);
  }


  @Post('/create')
  async createTweet(@Body() tweetDto: TweetDto): Promise<Tweet> {
    return this.tweetsService.createTweet(tweetDto);
  }

  @Post('/interactions')
  async tweetInteractions(@Body() tweetDto: TweetDto): Promise<Tweet> {
    return this.tweetsService.Interactions(tweetDto);
  }
}