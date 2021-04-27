import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public body: string;

  @Column()
  public likes: number;

  @ManyToOne(type => User, user => user.posts)
  public author: User;
}
