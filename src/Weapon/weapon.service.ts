//weapon.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeaponDTO } from './weapon.dto';
import { WeaponEntity } from './weapon.entity';

@Injectable()
export class WeaponService {
  constructor(
    @InjectRepository(WeaponEntity)
    private weaponRepo: Repository<WeaponEntity>,
  ) {}

  async findAll(): Promise<WeaponEntity[]> {
    return await this.weaponRepo.find();
  }

  async createWeapon(weaponDTO: WeaponDTO): Promise<WeaponEntity> {
    const weapon = this.weaponRepo.create(weaponDTO);
    return await this.weaponRepo.save(weapon);
  }

  async updateWeapon(weaponId: number, weaponDTO: WeaponDTO): Promise<WeaponEntity> {
    let weapon = await this.weaponRepo.findOne({ where: { id: weaponId } });
    if (!weapon) {
      throw new NotFoundException('Weapon not found');
    }
    weapon = { ...weapon, ...weaponDTO };
    return await this.weaponRepo.save(weapon);
  }

  async deleteWeapon(weaponId: number): Promise<void> {
    const result = await this.weaponRepo.delete(weaponId);
    if (result.affected === 0) {
      throw new NotFoundException('Weapon not found');
    }
  }
}
