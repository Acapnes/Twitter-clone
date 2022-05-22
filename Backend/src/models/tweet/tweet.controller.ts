import { Controller, Get } from "@nestjs/common";
import { Tweet } from "src/schemas/tweet.schema";
import { TweetsService } from "./tweet.service";


@Controller("/tweet")
export class TweetsController{
    constructor(private readonly tweetsService: TweetsService) {}

    @Get()
    async getTweets(): Promise<Tweet[]> {
      return this.tweetsService.getAll();
    }
}