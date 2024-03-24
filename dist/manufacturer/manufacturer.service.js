"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const manufacturer_entity_1 = require("./manufacturer.entity");
let ManufacturerService = class ManufacturerService {
    findByEmail(email) {
        throw new Error('Method not implemented.');
    }
    constructor(manufacturerRepo) {
        this.manufacturerRepo = manufacturerRepo;
    }
    async findAll() {
        return await this.manufacturerRepo.find();
    }
    async createUser(manufacturerDTO) {
        const manufacturer = this.manufacturerRepo.create(manufacturerDTO);
        return await this.manufacturerRepo.save(manufacturer);
    }
    async modifyCountry(userId, newCountry) {
        const manufacturer = await this.manufacturerRepo.findOne({ where: { id: userId } });
        if (!manufacturer) {
            throw new common_1.NotFoundException('Manufacturer not found');
        }
        manufacturer.country = newCountry;
        return await this.manufacturerRepo.save(manufacturer);
    }
    async getUsersByJoiningDate(joiningDate) {
        return await this.manufacturerRepo.find({ where: { joiningDate } });
    }
    async getUsersWithDefaultCountry() {
        return await this.manufacturerRepo.find({ where: { country: 'Unknown' } });
    }
    async updateUser(userId, manufacturerDTO) {
        let manufacturer = await this.manufacturerRepo.findOne({ where: { id: userId } });
        if (!manufacturer) {
            throw new common_1.NotFoundException('Manufacturer not found');
        }
        manufacturer = { ...manufacturer, ...manufacturerDTO };
        return await this.manufacturerRepo.save(manufacturer);
    }
    async deleteUser(userId) {
        const result = await this.manufacturerRepo.delete(userId);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Manufacturer not found');
        }
    }
};
exports.ManufacturerService = ManufacturerService;
exports.ManufacturerService = ManufacturerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(manufacturer_entity_1.ManufacturerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ManufacturerService);
//# sourceMappingURL=manufacturer.service.js.map