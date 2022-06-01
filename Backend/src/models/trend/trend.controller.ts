import { Controller, Get, Post } from "@nestjs/common";
import { Trend } from "src/schemas/trend.schema";
import { TrendsService } from "./trend.service";


@Controller("/trend")
export class TrendsController {
    constructor(private readonly trendsService: TrendsService) {}

    @Get()
    async getTrends(): Promise<Trend[]>{
        return this.trendsService.getAll();
    }

    @Post('/create')
    async createTrend(): Promise<Trend>{
        return this.trendsService.createTrend();
    }
}