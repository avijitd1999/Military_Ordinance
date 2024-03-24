import { Repository } from 'typeorm';
import { WeaponDTO } from './weapon.dto';
import { WeaponEntity } from './weapon.entity';
export declare class WeaponService {
    private weaponRepo;
    constructor(weaponRepo: Repository<WeaponEntity>);
    findAll(): Promise<WeaponEntity[]>;
    createWeapon(weaponDTO: WeaponDTO): Promise<WeaponEntity>;
    updateWeapon(weaponId: number, weaponDTO: WeaponDTO): Promise<WeaponEntity>;
    deleteWeapon(weaponId: number): Promise<void>;
}
