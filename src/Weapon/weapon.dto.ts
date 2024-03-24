import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';

export class WeaponDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  available: number;

  manufacturer: ManufacturerEntity; 
}
