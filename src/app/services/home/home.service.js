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
var HomeService = (function () {
    function HomeService() {
        console.log('school service ready');
        this.home = {
            homeHeading: "Sri Sai Public school",
            homeMsg: "A place where both physical and metal education is given high priopority. Our\n                       efforts are to bring the best out of all students. Not only get them educated but make them \n                       a all round individuals  ",
            homeHistory: "Our school has been established in 1983 and we are The University of Texas at \n                            San Antonio is dedicated to the advancement of knowledge through research and discovery, teaching and learning, community engagement and public service. As an institution of access and excellence, UTSA embraces multicultural traditions and serves as a center for intellectual and creative re\n                            as well as a catalyst for socioeconomic development and the commercialization of intellectual property"
        };
    }
    HomeService.prototype.getHomeObj = function () {
        return this.home;
    };
    return HomeService;
}());
HomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map