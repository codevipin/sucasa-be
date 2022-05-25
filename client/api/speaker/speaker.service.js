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
exports.SpeakerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const create_speaker_dto_1 = require("./dto/create-speaker.dto");
const speaker_entity_1 = require("./entities/speaker.entity");
let SpeakerService = class SpeakerService {
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return await this.repo
            .find()
            .then((items) => items.map((e) => create_speaker_dto_1.SpeakerDto.fromEntity(e)));
    }
    async findOne(id) {
        return await this.repo
            .findOne({ where: { id } })
            .then((e) => create_speaker_dto_1.SpeakerDto.fromEntity(e));
    }
    async create(dto) {
        return this.repo.save(dto).then((e) => create_speaker_dto_1.SpeakerDto.fromEntity(e));
    }
};
SpeakerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(speaker_entity_1.Speaker)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpeakerService);
exports.SpeakerService = SpeakerService;
//# sourceMappingURL=speaker.service.js.map