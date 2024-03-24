//manufacturer.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { WeaponEntity } from '../weapon/weapon.entity';

@Entity()
export class ManufacturerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  uniqueId: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  joiningDate: Date;

  @Column({ default: 'Unknown', length: 30 })
  country: string;

  @OneToMany(() => WeaponEntity, weapon => weapon.manufacturer)
  weapons: WeaponEntity[];
}
