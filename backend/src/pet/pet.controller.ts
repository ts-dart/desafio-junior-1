import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './create-pet.dto';

@Controller('pets')  
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createPetDto: CreatePetDto) {
    return this.petService.update(id, createPetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(id);
  }
}
