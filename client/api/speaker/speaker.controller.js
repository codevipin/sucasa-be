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
exports.SpeakerController = void 0;
const common_1 = require("@nestjs/common");
const speaker_service_1 = require("./speaker.service");
const create_speaker_dto_1 = require("./dto/create-speaker.dto");
let SpeakerController = class SpeakerController {
    constructor(speakerService) {
        this.speakerService = speakerService;
    }
    async getAll() {
        return await this.speakerService.getAll();
    }
    async getById(id) {
        return await this.speakerService.findOne(id);
    }
    async post(dto) {
        return this.speakerService.create(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpeakerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpeakerController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_speaker_dto_1.SpeakerDto]),
    __metadata("design:returntype", Promise)
], SpeakerController.prototype, "post", null);
SpeakerController = __decorate([
    (0, common_1.Controller)('speaker'),
    __metadata("design:paramtypes", [speaker_service_1.SpeakerService])
], SpeakerController);
exports.SpeakerController = SpeakerController;
//# sourceMappingURL=speaker.controller.js.map