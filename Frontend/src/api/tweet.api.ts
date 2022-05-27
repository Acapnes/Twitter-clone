import { CreateTweetDto } from "../dto/tweets/create.tweet.dto";
import { TweetDto } from "../dto/tweets/tweet.dto";

export class TweetAPI {
    public static async getAllTweets(): Promise<TweetDto[]> {
        const resp = await fetch("http://localhost:3000/tweet", {
            method: "GET"
        });

        const data = await resp.json();

        return data;
    }

    public static async sendTweet(tweetReq:CreateTweetDto) {
       const resp = await fetch("http://localhost:3000/tweet/create", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(tweetReq)
        })
        const data = resp.json();

        return data;
    }
}