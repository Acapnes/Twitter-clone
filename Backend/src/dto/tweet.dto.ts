import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class TweetDto {
    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    time: string;

    @IsNotEmpty()
    data: {
        message:string
        likeCount:number
        retweetCount:number
        commentCount:number
    }
    
    @IsNotEmpty()
    img:{
        src:string
    }
}