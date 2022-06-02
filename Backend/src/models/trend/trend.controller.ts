import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { TrendDto } from "src/dto/trend/trend.dto";
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
    async createTrend(@Body()trendDto: TrendDto): Promise<Trend>{
        return this.trendsService.createTrend(trendDto);
    }
}