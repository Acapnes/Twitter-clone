import { Body, Controller, ForbiddenException, Get, Param, Post, Res, UseFilters } from "@nestjs/common";
import { User } from "src/schemas/user.schema";
import { UsersService } from "./user.service";
import { UserDto } from "src/dto/user.dto";
import { Response } from 'express';
import { HttpExceptionFilter } from "src/helpers/http.exception";



@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Post('/login')
  async userLogin(@Body() UserDto: UserDto) {
    return this.usersService.Login(UserDto.email, UserDto.password);
  }

  @Post('/register')
  async userRegister(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.Register(userDto);
  }

}
