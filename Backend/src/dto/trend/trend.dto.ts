import { IsNotEmpty, IsString } from "class-validator";


export class TrendDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    count:string
}