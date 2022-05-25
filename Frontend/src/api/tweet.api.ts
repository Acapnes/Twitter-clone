import { TweetDto } from "../dto/tweet.dto";

export class TweetAPI{
    public static async getAllTweets(): Promise<TweetDto[]> {
        const resp = await fetch("http://localhost:3000/tweet", {
            method: "GET"
        });

        const data = await resp.json();

        return data;
    }
}