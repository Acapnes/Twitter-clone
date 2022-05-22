import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tweet, TweetDocument } from "src/schemas/tweet.schema";


@Injectable()
export class TweetsService {
  constructor(@InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>) { }
  
    async getAll(): Promise<Tweet[]> {
      return this.tweetModel.find({});
    }
  }