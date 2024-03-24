// manufacturer.module.ts
import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManufacturerController } from './manufacturer.controller';
import { ManufacturerService } from './manufacturer.service';
import { ManufacturerEntity } from './manufacturer.entity';
import { WeaponEntity } from '../weapon/weapon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ManufacturerEntity])],
  controllers: [ManufacturerController],
  providers: [ManufacturerService, {
    provide: 'APP_PIPE',
    useClass: ValidationPipe, // Ensure that ValidationPipe is properly configured
  }],
})
export class ManufacturerModule {}
