import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type TrendDocument = Trend & Document;

@Schema()
export class Trend { 

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    count: string
}

export const TrendSchema = SchemaFactory.createForClass(Trend);