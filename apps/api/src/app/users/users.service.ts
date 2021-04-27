import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersService: Repository<User>){
  }

  getAll(): Promise<User[]> {
    return this.usersService.find();
  }

  getOneById(id: number): Promise<User> {
    return this.usersService.findOneOrFail(id);
  }
}
