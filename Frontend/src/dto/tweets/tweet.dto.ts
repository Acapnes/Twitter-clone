export interface TweetDto {

    author: {
        _id: string,
        name: string,
        email: string,
        username: string,
        avatar: string,
        confrimed: boolean,
        bio: string,
        password: string,
    };

    data: {
        time?: string;
        message?: string
        likeCount?: number
        retweetCount?: number
        commentCount?: number
        img: {
            src?: string
        }
    }

    _id: string
}