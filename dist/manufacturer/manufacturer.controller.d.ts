import { ManufacturerService } from './manufacturer.service';
import { ManufacturerDTO } from './manufacturer.dto';
import { ManufacturerEntity } from './manufacturer.entity';
export declare class ManufacturerController {
    private readonly manufacturerService;
    constructor(manufacturerService: ManufacturerService);
    findAll(): Promise<ManufacturerEntity[]>;
    createUser(manufacturerDTO: ManufacturerDTO): Promise<ManufacturerEntity>;
    modifyCountry(userId: number, newCountry: string): Promise<ManufacturerEntity>;
    updateUser(userId: number, manufacturerDTO: ManufacturerDTO): Promise<ManufacturerEntity>;
    getUsersByJoiningDate(joiningDate: Date): Promise<ManufacturerEntity[]>;
    getUsersWithDefaultCountry(): Promise<ManufacturerEntity[]>;
    deleteUser(userId: number): Promise<void>;
}
