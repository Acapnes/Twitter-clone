import { Body, Controller, ForbiddenException, Get, Param, Post, Res, UseFilters } from "@nestjs/common";
import { User } from "src/schemas/user.schema";
import { UsersService } from "./user.service";
import { UserDto } from "src/dto/users/user.dto";
import { Response } from 'express';
import { HttpExceptionFilter } from "src/helpers/http.exception";
import { UserLoginDto } from "src/dto/users/user.login.dto";



@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':_id')
  async getUserById(@Param('_id') _id: string): Promise<User> {
    return this.usersService.getUserById(_id);
  }


  @Post('/login')
  async userLogin(@Body() UserLoginDto: UserLoginDto) {
    return UserLoginDto.email ? this.usersService.Login(UserLoginDto.email, null, UserLoginDto.password)
      : this.usersService.Login(null, UserLoginDto.username, UserLoginDto.password);
  }

  @Post('/register')
  async userRegister(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.Register(userDto);
  }

}
