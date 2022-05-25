export interface TweetDto {

    author: string;

    username: string;

    time: string;

    confrimed:boolean;

    data: {
        message: string
        likeCount: number
        retweetCount: number
        commentCount: number
    },

    img: {
        src: string
    }
}