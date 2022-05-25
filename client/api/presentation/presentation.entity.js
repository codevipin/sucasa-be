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
exports.Presentation = void 0;
const typeorm_1 = require("typeorm");
const attendee_entity_1 = require("../attendee/attendee.entity");
const speaker_entity_1 = require("../speaker/entities/speaker.entity");
let Presentation = class Presentation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Presentation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Presentation.prototype, "presentation", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Presentation.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Presentation.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => attendee_entity_1.Attendee, (attendee) => attendee.presentation),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Presentation.prototype, "attendees", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => speaker_entity_1.Speaker, (speaker) => speaker.presentation),
    __metadata("design:type", speaker_entity_1.Speaker)
], Presentation.prototype, "speaker", void 0);
Presentation = __decorate([
    (0, typeorm_1.Entity)()
], Presentation);
exports.Presentation = Presentation;
//# sourceMappingURL=presentation.entity.js.map