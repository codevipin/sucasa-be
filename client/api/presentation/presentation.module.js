"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const attendee_entity_1 = require("../attendee/attendee.entity");
const attendee_service_1 = require("../attendee/attendee.service");
const speaker_entity_1 = require("../speaker/entities/speaker.entity");
const speaker_service_1 = require("../speaker/speaker.service");
const presentation_controller_1 = require("./presentation.controller");
const presentation_entity_1 = require("./presentation.entity");
const presentation_service_1 = require("./presentation.service");
let PresentationModule = class PresentationModule {
};
PresentationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([presentation_entity_1.Presentation, attendee_entity_1.Attendee, speaker_entity_1.Speaker])],
        providers: [presentation_service_1.PresentationService, attendee_service_1.AttendeeService, speaker_service_1.SpeakerService],
        controllers: [presentation_controller_1.PresentationController],
    })
], PresentationModule);
exports.PresentationModule = PresentationModule;
//# sourceMappingURL=presentation.module.js.map