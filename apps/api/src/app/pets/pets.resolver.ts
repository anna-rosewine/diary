import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/createPet.input';


@Resolver(of => Pet)
export class PetsResolver{
  constructor(private petsService: PetsService){
  }

  @Query(returns => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @Mutation(returns=> Pet)
  createPet(@Args('createPetInput') createInput: CreatePetInput) : Promise<Pet> {
    return this.petsService.createPet(createInput);
  }

}
