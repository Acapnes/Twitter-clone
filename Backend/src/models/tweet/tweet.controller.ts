import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImgDto } from "src/dto/img.dto";
import { TweetDto } from "src/dto/tweet.dto";
import { Tweet } from "src/schemas/tweet.schema";
import { TweetsService } from "./tweet.service";


@Controller("/tweet")
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) { }

  @Get()
  async getTweets(): Promise<Tweet[]> {
    return this.tweetsService.getAll();
  }

  @Post('/create')
  async createTweet(@Body() tweetDto: TweetDto): Promise<Tweet> {
    return this.tweetsService.createTweet(tweetDto);
  }
}