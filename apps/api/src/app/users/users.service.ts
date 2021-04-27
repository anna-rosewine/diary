import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersService: Repository<User>){
  }

  getAll(): Promise<User[]> {
    return this.usersService.find({
      relations: ['posts']
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.usersService.create(createUserDto);
    return await this.usersService.save(newUser);
  }

  async updateUser(name: string, id: number): Promise<User> {
    const updatedUser = await this.usersService.findOne(id);
    updatedUser.name = name;
    return this.usersService.save(updatedUser);
  }

  async deleteUser(id: number): Promise<User>{
    const user = await this.usersService.findOne(id);
    return this.usersService.remove(user);
  }

  async getOneById(id: number): Promise<User> {
    try{
      return await this.usersService.findOneOrFail(id);
    } catch (err) {
      throw err;
    }
  }
}
