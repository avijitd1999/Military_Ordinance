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
exports.WeaponService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const weapon_entity_1 = require("./weapon.entity");
let WeaponService = class WeaponService {
    constructor(weaponRepo) {
        this.weaponRepo = weaponRepo;
    }
    async findAll() {
        return await this.weaponRepo.find();
    }
    async createWeapon(weaponDTO) {
        const weapon = this.weaponRepo.create(weaponDTO);
        return await this.weaponRepo.save(weapon);
    }
    async updateWeapon(weaponId, weaponDTO) {
        let weapon = await this.weaponRepo.findOne({ where: { id: weaponId } });
        if (!weapon) {
            throw new common_1.NotFoundException('Weapon not found');
        }
        weapon = { ...weapon, ...weaponDTO };
        return await this.weaponRepo.save(weapon);
    }
    async deleteWeapon(weaponId) {
        const result = await this.weaponRepo.delete(weaponId);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Weapon not found');
        }
    }
};
exports.WeaponService = WeaponService;
exports.WeaponService = WeaponService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(weapon_entity_1.WeaponEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WeaponService);
//# sourceMappingURL=weapon.service.js.map