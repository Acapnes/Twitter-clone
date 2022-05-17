/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "src/schemas/user.schema";
import { UsersService } from "./user.service";
import { UserDto } from "src/dto/user.dto";


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

}
