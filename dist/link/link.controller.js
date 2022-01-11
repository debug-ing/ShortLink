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
exports.LinkController = void 0;
const common_1 = require("@nestjs/common");
const create_link_dto_1 = require("./dto/create-link.dto");
const get_link_dto_1 = require("./dto/get-link.dto");
const link_service_1 = require("./link.service");
let LinkController = class LinkController {
    constructor(linkService) {
        this.linkService = linkService;
    }
    async createLink(createLink) {
        return await this.linkService.createLink(createLink);
    }
    async getLink(getLink) {
        return await this.linkService.getLink(getLink);
    }
    async deleteLink(getLink) {
        await this.linkService.deleteLink(getLink);
        return { status: true };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_link_dto_1.CreateLinkDto]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "createLink", null);
__decorate([
    (0, common_1.Get)(":link"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_link_dto_1.GetLinkDto]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLink", null);
__decorate([
    (0, common_1.Delete)(":link"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_link_dto_1.GetLinkDto]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "deleteLink", null);
LinkController = __decorate([
    (0, common_1.Controller)('link'),
    __metadata("design:paramtypes", [link_service_1.LinkService])
], LinkController);
exports.LinkController = LinkController;
//# sourceMappingURL=link.controller.js.map