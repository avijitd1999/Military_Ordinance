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
exports.ManufacturerController = void 0;
const common_1 = require("@nestjs/common");
const manufacturer_service_1 = require("./manufacturer.service");
const manufacturer_dto_1 = require("./manufacturer.dto");
let ManufacturerController = class ManufacturerController {
    constructor(manufacturerService) {
        this.manufacturerService = manufacturerService;
    }
    async findAll() {
        return await this.manufacturerService.findAll();
    }
    async createUser(manufacturerDTO) {
        return await this.manufacturerService.createUser(manufacturerDTO);
    }
    async modifyCountry(userId, newCountry) {
        return await this.manufacturerService.modifyCountry(userId, newCountry);
    }
    async updateUser(userId, manufacturerDTO) {
        return await this.manufacturerService.updateUser(userId, manufacturerDTO);
    }
    async getUsersByJoiningDate(joiningDate) {
        return await this.manufacturerService.getUsersByJoiningDate(joiningDate);
    }
    async getUsersWithDefaultCountry() {
        return await this.manufacturerService.getUsersWithDefaultCountry();
    }
    async deleteUser(userId) {
        return await this.manufacturerService.deleteUser(userId);
    }
};
exports.ManufacturerController = ManufacturerController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_dto_1.ManufacturerDTO]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "createUser", null);
__decorate([
    (0, common_1.Patch)(':id/country'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('country')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "modifyCountry", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, manufacturer_dto_1.ManufacturerDTO]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)('joining-date'),
    __param(0, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "getUsersByJoiningDate", null);
__decorate([
    (0, common_1.Get)('default-country'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "getUsersWithDefaultCountry", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ManufacturerController.prototype, "deleteUser", null);
exports.ManufacturerController = ManufacturerController = __decorate([
    (0, common_1.Controller)('manufacturer'),
    __metadata("design:paramtypes", [manufacturer_service_1.ManufacturerService])
], ManufacturerController);
//# sourceMappingURL=manufacturer.controller.js.map