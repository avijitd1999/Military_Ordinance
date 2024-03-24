import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';
export declare class WeaponEntity {
    id: number;
    name: string;
    available: number;
    manufacturer: ManufacturerEntity;
}
