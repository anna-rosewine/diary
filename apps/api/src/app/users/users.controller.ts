import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  createUser(name: string): Promise<User> {
    return this.usersService.createUser(name);
  }

  updateUser(name: string, id: number): Promise<User> {
    return this.usersService.updateUser(name, id);
  }

  getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  getById(id: number): Promise<User> {
    return this.usersService.getOneById(id)
  }

  removeUser(id: number): Promise<User> {
    return  this.usersService.deleteUser(id);
  }
}
