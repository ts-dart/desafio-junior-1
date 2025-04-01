import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Pet extends Model<Pet> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  type: string;

  @Column
  race: string;
}
