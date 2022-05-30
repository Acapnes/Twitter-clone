import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsOptional } from "class-validator";


export class UserLoginDto {

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}