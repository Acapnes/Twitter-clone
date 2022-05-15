/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { User } from "src/schemas/user.schema";
import { UsersService } from "./user.service";



@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getAll();
  }

}
