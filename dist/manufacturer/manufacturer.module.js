"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const manufacturer_controller_1 = require("./manufacturer.controller");
const manufacturer_service_1 = require("./manufacturer.service");
const manufacturer_entity_1 = require("./manufacturer.entity");
let ManufacturerModule = class ManufacturerModule {
};
exports.ManufacturerModule = ManufacturerModule;
exports.ManufacturerModule = ManufacturerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([manufacturer_entity_1.ManufacturerEntity])],
        controllers: [manufacturer_controller_1.ManufacturerController],
        providers: [manufacturer_service_1.ManufacturerService, {
                provide: 'APP_PIPE',
                useClass: common_1.ValidationPipe,
            }],
    })
], ManufacturerModule);
//# sourceMappingURL=manufacturer.module.js.map