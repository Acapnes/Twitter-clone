import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Trend, TrendDocument } from "src/schemas/trend.schema";


@Injectable()
export class TrendsService {
    constructor(@InjectModel(Trend.name) private trendModel: Model<TrendDocument>) { }

    async getAll(): Promise<Trend[]> {
        return this.trendModel.find({});
    }

    async createTrend(): Promise<Trend> {
        return this.trendModel.create({
            name: "#Turkey"
        });
    }
}