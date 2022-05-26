/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

export type TweetDocument = Tweet & Document;

@Schema()
export class Tweet {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref:"User" })
  author: User

  @Prop({ type: Object })
  data: {
    message: string,
    likeCount: number,
    retweetCount: number,
    commentCount: number,
    img: {
      src: string
    }
  };
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);