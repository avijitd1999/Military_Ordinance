import { WeaponEntity } from '../weapon/weapon.entity';
export declare class ManufacturerEntity {
    id: number;
    uniqueId: string;
    joiningDate: Date;
    country: string;
    weapons: WeaponEntity[];
}
