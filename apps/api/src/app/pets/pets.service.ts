import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/createPet.input';
import { Owner } from '../owners/entities/owner.entity';
import { OwnersService } from '../owners/owners.service';

@Injectable()
export class PetsService{
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>, @Inject(forwardRef(() => OwnersService)) private ownersService: OwnersService) {
  }

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]>{
    return this.petsRepository.find();
  }

  findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOne(id)
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId)
  }
}
