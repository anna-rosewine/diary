import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from './entities/owner.entity';
import { PetsService } from '../pets/pets.service';
import { Pet } from '../pets/pet.entity';

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owner) private ownersRepository: Repository<Owner>,   @Inject(forwardRef(() => PetsService)) private petsService: PetsService ) {
  }
  create(createOwnerInput: CreateOwnerInput): Promise<Owner> {
    const newOwner = this.ownersRepository.create(createOwnerInput)
    return this.ownersRepository.save(newOwner);
  }

  findAll(): Promise<Owner[]> {
    return this.ownersRepository.find();
  }

  findOne(id: number): Promise<Owner> {
    return this.ownersRepository.findOne(id);
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    this.ownersRepository.update(id, updateOwnerInput).then();
    return this.ownersRepository.findOne(id);
  }

  remove(id: number) {
    this.ownersRepository.delete(id).then();
  }

  // async getPets(petsId: [number]): Promise<Pet[]> {
  //   const pets = [];
  //   petsId.forEach((petId) => {
  //     pets.push(this.petsService.findOne(petId))
  //   })
  //   return pets;
  // }

  async getPets(pets: Pet[]): Promise<Pet[]> {
    console.log(pets)
    const answerPets = [];
    const petId = [];
    pets.forEach((pet) => {
      petId.push(pet.id)
    })

    petId.forEach((id) => {
      answerPets.push(this.petsService.findOne(id));
    })
    return answerPets;
  }
}
