/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema()
export class Tweet {
  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  time: string;


  @Prop()
  data: { message: string, likeCount: number, retweetCount: number, commentCount: number }[];

  @Prop()
  img: { src: string }[];
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);