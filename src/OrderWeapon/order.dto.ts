// order.dto.ts
import { IsString, IsNumber, IsArray } from 'class-validator';

export class OrderDTO {
  @IsString()
  customerName: string;

  @IsArray()
  @IsNumber({}, { each: true })
  weapons: number[]; // Assuming the 'weapons' property is an array of weapon IDs
}
