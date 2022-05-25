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
exports.AttendeeController = void 0;
const common_1 = require("@nestjs/common");
const attendee_entity_1 = require("./attendee.entity");
const attendee_service_1 = require("./attendee.service");
let AttendeeController = class AttendeeController {
    constructor(service) {
        this.service = service;
    }
    getAttendee(id) {
        return this.service.findOne(id);
    }
    getAllAttendee() {
        return this.service.findAll();
    }
    createAttendee(attendee) {
        return this.service.add(attendee);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AttendeeController.prototype, "getAttendee", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendeeController.prototype, "getAllAttendee", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attendee_entity_1.Attendee]),
    __metadata("design:returntype", Promise)
], AttendeeController.prototype, "createAttendee", null);
AttendeeController = __decorate([
    (0, common_1.Controller)('attendee'),
    __metadata("design:paramtypes", [attendee_service_1.AttendeeService])
], AttendeeController);
exports.AttendeeController = AttendeeController;
//# sourceMappingURL=attendee.controller.js.map