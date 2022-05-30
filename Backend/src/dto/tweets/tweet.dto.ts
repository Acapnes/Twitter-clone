import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { UserDto } from "../users/user.dto";

export class TweetDto {
    
    @IsNotEmpty()
    author: UserDto

    @IsNotEmpty()
    data: {
        time: string;
        message:string
        likeCount:number
        retweetCount:number
        commentCount:number
        img:{
            src:string
        }
    }

}