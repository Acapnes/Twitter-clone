import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type TrendDocument = Trend & Document;

@Schema()
export class Trend{

    @Prop()
    name:string
}

export const TrendSchema = SchemaFactory.createForClass(Trend);