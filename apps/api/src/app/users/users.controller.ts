import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUserDto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Put()
  async updateUser(name: string, id: number): Promise<User> {
    return await this.usersService.updateUser(name, id);
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<User> {
    return this.usersService.getOneById(id)
  }

  @Delete()
  async removeUser(id: number): Promise<User> {
    return await this.usersService.deleteUser(id);
  }
}
