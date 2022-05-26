import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async getAll(): Promise<User[]> {
    return this.userModel.find({});
  }

  async Login(email: string, password: string): Promise<User> {
    return this.userModel.findOne({ email, password });
  }

  async Register(userDto:UserDto): Promise<User> {
    return this.userModel.create(userDto);
  }
}