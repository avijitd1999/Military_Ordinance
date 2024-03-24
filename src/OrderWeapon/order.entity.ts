import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { WeaponEntity } from '../weapon/weapon.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @ManyToMany(() => WeaponEntity)
  @JoinTable()
  weapons: WeaponEntity[];
}
