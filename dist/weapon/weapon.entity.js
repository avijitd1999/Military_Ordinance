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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponEntity = void 0;
const typeorm_1 = require("typeorm");
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
let WeaponEntity = class WeaponEntity {
};
exports.WeaponEntity = WeaponEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WeaponEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], WeaponEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], WeaponEntity.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manufacturer_entity_1.ManufacturerEntity, manufacturer => manufacturer.weapons),
    __metadata("design:type", manufacturer_entity_1.ManufacturerEntity)
], WeaponEntity.prototype, "manufacturer", void 0);
exports.WeaponEntity = WeaponEntity = __decorate([
    (0, typeorm_1.Entity)()
], WeaponEntity);
//# sourceMappingURL=weapon.entity.js.map