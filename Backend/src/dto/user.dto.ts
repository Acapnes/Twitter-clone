import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";


export class UserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    avatar:string;

    @IsBoolean()
    @IsNotEmpty()
    confrimed: boolean;

    @IsString()
    bio:string;

    @IsString()
    @IsNotEmpty()
    password: string;
}