import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponController } from './weapon.controller';
import { WeaponService } from './weapon.service';
import { WeaponEntity } from './weapon.entity';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity'; // Import the ManufacturerEntity

@Module({
  imports: [
    TypeOrmModule.forFeature([WeaponEntity, ManufacturerEntity]), // Include ManufacturerEntity here
  ],
  controllers: [WeaponController],
  providers: [WeaponService],
})
export class WeaponModule {}
