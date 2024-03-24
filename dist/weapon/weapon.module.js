"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const weapon_controller_1 = require("./weapon.controller");
const weapon_service_1 = require("./weapon.service");
const weapon_entity_1 = require("./weapon.entity");
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
let WeaponModule = class WeaponModule {
};
exports.WeaponModule = WeaponModule;
exports.WeaponModule = WeaponModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([weapon_entity_1.WeaponEntity, manufacturer_entity_1.ManufacturerEntity]),
        ],
        controllers: [weapon_controller_1.WeaponController],
        providers: [weapon_service_1.WeaponService],
    })
], WeaponModule);
//# sourceMappingURL=weapon.module.js.map