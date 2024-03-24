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
exports.WeaponController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const weapon_service_1 = require("./weapon.service");
const weapon_dto_1 = require("./weapon.dto");
let WeaponController = class WeaponController {
    constructor(weaponService) {
        this.weaponService = weaponService;
    }
    async findAll() {
        return await this.weaponService.findAll();
    }
    async createWeapon(weaponDTO) {
        return await this.weaponService.createWeapon(weaponDTO);
    }
    async updateWeapon(weaponId, weaponDTO) {
        return await this.weaponService.updateWeapon(weaponId, weaponDTO);
    }
    async deleteWeapon(weaponId) {
        return await this.weaponService.deleteWeapon(weaponId);
    }
    uploadFile(file) {
        console.log(file);
        return file;
    }
};
exports.WeaponController = WeaponController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeaponController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [weapon_dto_1.WeaponDTO]),
    __metadata("design:returntype", Promise)
], WeaponController.prototype, "createWeapon", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, weapon_dto_1.WeaponDTO]),
    __metadata("design:returntype", Promise)
], WeaponController.prototype, "updateWeapon", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WeaponController.prototype, "deleteWeapon", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: (req, file, cb) => {
            if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                cb(null, true);
            }
            else {
                cb(new Error('Invalid file type'), false);
            }
        },
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                cb(null, Date.now() + file.originalname);
            }
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WeaponController.prototype, "uploadFile", null);
exports.WeaponController = WeaponController = __decorate([
    (0, common_1.Controller)('weapon'),
    __metadata("design:paramtypes", [weapon_service_1.WeaponService])
], WeaponController);
//# sourceMappingURL=weapon.controller.js.map