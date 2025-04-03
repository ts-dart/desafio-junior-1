import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do pet',
    example: 'Rex',
  })
  name: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    description: 'Idade do pet',
    example: 5,
  })
  age: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Tipo de animal (por exemplo, cachorro, gato)',
    example: 'Cachorro',
  })
  type: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Raça do pet',
    example: 'Labrador',
  })
  race: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Informações de contato do dono do pet',
    example: '1234-5678',
  })
  contact: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Endereço do dono do pet',
    example: 'Rua das Flores, 123',
  })
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do cliente, dono do pet',
    example: 'Marcos Henrique',
  })
  customerName: string;
}
