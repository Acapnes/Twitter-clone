import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TweetDto } from "src/dto/tweet.dto";
import { Tweet, TweetDocument } from "src/schemas/tweet.schema";


@Injectable()
export class TweetsService {
  
  photoupload(): Tweet | PromiseLike<Tweet> {
    throw new Error("Method not implemented.");
  }
  constructor(@InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>) {}

  async getAll(): Promise<Tweet[]> {
    return this.tweetModel.find({});
  }

  async createTweet(tweetDto:TweetDto): Promise<Tweet> {
    return this.tweetModel.create(tweetDto);
  }
}