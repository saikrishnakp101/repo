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
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var ContactService = (function () {
    function ContactService() {
        console.log('school service ready');
        this.contacts = [{
                contactName: "Ruby Rose",
                contactEmail: "test1@email1.'com  ",
                contactProfilePic: "https://s-media-cache-ak0.pinimg.com/736x/af/58/28/af5828bb2044f323c713dea923b01db7.jpg",
                contactPhone: "999-999-8888",
                contactProfession: 'teacher'
            },
            {
                contactName: "Albert Einstine",
                contactEmail: "test@email.'com  ",
                contactProfilePic: "https://s-media-cache-ak0.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg",
                contactPhone: "999-999-9999",
                contactProfession: 'principle'
            }
        ];
    }
    ContactService.prototype.getContactsObj = function () {
        return this.contacts;
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map