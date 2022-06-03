export interface CreateTweetDto {

    author: string,

    data: {
        time: string
        message:string
        likeCount:number
        retweetCount:number
        commentCount:number
        img:{
            src:any
        }
    }
}