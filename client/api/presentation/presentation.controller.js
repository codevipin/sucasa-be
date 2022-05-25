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
exports.PresentationController = void 0;
const common_1 = require("@nestjs/common");
const attendee_service_1 = require("../attendee/attendee.service");
const create_speaker_dto_1 = require("../speaker/dto/create-speaker.dto");
const speaker_service_1 = require("../speaker/speaker.service");
const presentation_entity_1 = require("./presentation.entity");
const presentation_service_1 = require("./presentation.service");
let PresentationController = class PresentationController {
    constructor(service, attendeeService, speakerService) {
        this.service = service;
        this.attendeeService = attendeeService;
        this.speakerService = speakerService;
    }
    getPresentation(id) {
        return this.service.findOne(id);
    }
    getAllPresentations() {
        return this.service.findAll();
    }
    async createPresentation(presentation) {
        const speaker = await this.speakerService.create(create_speaker_dto_1.SpeakerDto.fromEntity(presentation.speaker));
        return this.service.add(Object.assign(Object.assign({}, presentation), { speaker: create_speaker_dto_1.SpeakerDto.toEntity(speaker) }));
    }
    async addAttendees(presentationId, attendeeId) {
        const attendee = await this.attendeeService.findOne(attendeeId);
        const presentation = await this.service.findOne(presentationId);
        return this.service.patch(Object.assign(Object.assign({}, presentation), { attendees: [...presentation.attendees, attendee] }));
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PresentationController.prototype, "getPresentation", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PresentationController.prototype, "getAllPresentations", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [presentation_entity_1.Presentation]),
    __metadata("design:returntype", Promise)
], PresentationController.prototype, "createPresentation", null);
__decorate([
    (0, common_1.Patch)(':presentation_id/attendee/:attendee_id'),
    __param(0, (0, common_1.Param)('presentation_id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('attendee_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PresentationController.prototype, "addAttendees", null);
PresentationController = __decorate([
    (0, common_1.Controller)('presentation'),
    __metadata("design:paramtypes", [presentation_service_1.PresentationService,
        attendee_service_1.AttendeeService,
        speaker_service_1.SpeakerService])
], PresentationController);
exports.PresentationController = PresentationController;
//# sourceMappingURL=presentation.controller.js.map