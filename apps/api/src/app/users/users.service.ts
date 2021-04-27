import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersService: Repository<User>){
  }

  getAll(): Promise<User[]> {
    return this.usersService.find();
  }

  createUser(name: string): Promise<User> {
    const newUser = this.usersService.create({name});
    return this.usersService.save(newUser);
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
