import { Repository } from 'typeorm';
import { ManufacturerDTO } from './manufacturer.dto';
import { ManufacturerEntity } from './manufacturer.entity';
export declare class ManufacturerService {
    private manufacturerRepo;
    findByEmail(email: string): void;
    constructor(manufacturerRepo: Repository<ManufacturerEntity>);
    findAll(): Promise<ManufacturerEntity[]>;
    createUser(manufacturerDTO: ManufacturerDTO): Promise<ManufacturerEntity>;
    modifyCountry(userId: number, newCountry: string): Promise<ManufacturerEntity>;
    getUsersByJoiningDate(joiningDate: Date): Promise<ManufacturerEntity[]>;
    getUsersWithDefaultCountry(): Promise<ManufacturerEntity[]>;
    updateUser(userId: number, manufacturerDTO: ManufacturerDTO): Promise<ManufacturerEntity>;
    deleteUser(userId: number): Promise<void>;
}
