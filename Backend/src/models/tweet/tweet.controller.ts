import { Controller, Get, Post } from "@nestjs/common";
import { Tweet } from "src/schemas/tweet.schema";
import { TweetsService } from "./tweet.service";


@Controller("/tweet")
export class TweetsController{
    constructor(private readonly tweetsService: TweetsService) {}

    @Get()
    async getTweets(): Promise<Tweet[]> {
      return this.tweetsService.getAll();
    }

    @Post('/create')
    async createTweet(): Promise<Tweet>{
      return this.tweetsService.createTweet();
    }
}