import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderEntity } from './order.entity';
import { WeaponEntity } from '../weapon/weapon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, WeaponEntity]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderedWeaponModule {}
