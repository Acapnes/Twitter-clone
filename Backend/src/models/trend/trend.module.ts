import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Trend, TrendSchema } from "src/schemas/trend.schema";
import { TrendsController } from "./trend.controller";
import { TrendsService } from "./trend.service";



@Module({
    imports: [MongooseModule.forFeature([{ name: Trend.name, schema: TrendSchema }])],
    controllers: [TrendsController],
    providers: [TrendsService],
})
export class TrendsModule {}