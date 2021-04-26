import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Column } from 'typeorm';
import { Owner } from '../owners/entities/owner.entity';

@Entity()
@ObjectType()
export class Pet{
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({nullable: true})
  @Field({nullable: true})
  type?: string;

  @Column({nullable: true})
  @Field(type => Int, {nullable: true})
  ownerId?: number;


  @ManyToOne(() => Owner, owner => owner.pets)
  @Field(type => Owner, {nullable: true})
  owner?: Owner;
}
