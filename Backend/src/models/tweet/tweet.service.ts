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

    async createTweet(): Promise<Tweet>{
      return this.tweetModel.create({
        author:"Alper",
        username:"Acapnes",
        time:"23.05.2022",
        data:{
          message:"Lore ipsum",
          likeCount:5,
          retweetCount:6,
          commentCount:23
        },
        img:{
          src:"abc.jpg"
        }
      })
    }
  }