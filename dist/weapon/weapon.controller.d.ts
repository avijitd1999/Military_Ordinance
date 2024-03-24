/// <reference types="multer" />
import { WeaponService } from './weapon.service';
import { WeaponDTO } from './weapon.dto';
import { WeaponEntity } from './weapon.entity';
export declare class WeaponController {
    private readonly weaponService;
    constructor(weaponService: WeaponService);
    findAll(): Promise<WeaponEntity[]>;
    createWeapon(weaponDTO: WeaponDTO): Promise<WeaponEntity>;
    updateWeapon(weaponId: number, weaponDTO: WeaponDTO): Promise<WeaponEntity>;
    deleteWeapon(weaponId: number): Promise<void>;
    uploadFile(file: Express.Multer.File): Express.Multer.File;
}
