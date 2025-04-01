import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pet } from './pet.entity';  
import { CreatePetDto } from './create-pet.dto';
import { InferAttributes } from 'sequelize';

@Injectable()
export class PetService {
  constructor(
    @InjectModel(Pet) private petModel: typeof Pet, 
  ) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const pet = await this.petModel.create(createPetDto as Pet);
    return pet;
  }

  async findAll() {
    return this.petModel.findAll();  
  }

  async findOne(id: string) {
    return this.petModel.findOne({ where: { id } }); 
  }

  async update(id: string, createPetDto: CreatePetDto) {
    const pet = await this.petModel.findOne({ where: { id } });
    if (pet) {
      return pet.update(createPetDto); 
    }
    return null;
  }

  async remove(id: string) {
    const pet = await this.petModel.findOne({ where: { id } });
    if (pet) {
      await pet.destroy(); 
      return true;
    }
    return false;
  }
}