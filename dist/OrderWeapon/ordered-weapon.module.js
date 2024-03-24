"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedWeaponModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_entity_1 = require("./order.entity");
const weapon_entity_1 = require("../weapon/weapon.entity");
let OrderedWeaponModule = class OrderedWeaponModule {
};
exports.OrderedWeaponModule = OrderedWeaponModule;
exports.OrderedWeaponModule = OrderedWeaponModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.OrderEntity, weapon_entity_1.WeaponEntity]),
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
    })
], OrderedWeaponModule);
//# sourceMappingURL=ordered-weapon.module.js.map