"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeakerModule = void 0;
const common_1 = require("@nestjs/common");
const speaker_service_1 = require("./speaker.service");
const speaker_controller_1 = require("./speaker.controller");
const typeorm_1 = require("@nestjs/typeorm");
const speaker_entity_1 = require("./entities/speaker.entity");
let SpeakerModule = class SpeakerModule {
};
SpeakerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([speaker_entity_1.Speaker])],
        controllers: [speaker_controller_1.SpeakerController],
        providers: [speaker_service_1.SpeakerService],
    })
], SpeakerModule);
exports.SpeakerModule = SpeakerModule;
//# sourceMappingURL=speaker.module.js.map