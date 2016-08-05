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
var core_1 = require('@angular/core');
var composeProgram_1 = require('./composeProgram');
var composeProgram_service_1 = require('./composeProgram.service');
require('./rxjs-extensions');
var AppComponent = (function () {
    function AppComponent(composeProgramService) {
        this.composeProgramService = composeProgramService;
        this.title = 'Compose Web Console';
        this.composeProgram = new composeProgram_1.ComposeProgram();
    }
    AppComponent.prototype.getProgram = function () {
        var _this = this;
        this.composeProgramService
            .getProgram()
            .then(function (composeProg) { return _this.composeProgram = composeProg; });
    };
    AppComponent.prototype.launchProgram = function () {
        var _this = this;
        this.serviceResponse = "waiting...";
        this.composeProgramService
            .saveProgram(this.composeProgram)
            .then(function (result) { return _this.serviceResponse = result; })
            .catch(function (error) { return _this.serviceResponse = error; });
    };
    AppComponent.prototype.getProgramStatus = function () {
        var _this = this;
        this.composeProgramService
            .getProgramStatus()
            .then(function (result) { return _this.serviceResponse = result; });
    };
    AppComponent.prototype.stopProgram = function () {
        var _this = this;
        this.composeProgramService
            .stopProgram()
            .then(function (result) { return _this.serviceResponse = result; })
            .catch(function (error) { return _this.serviceResponse = error; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getProgram();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n\t<h1>{{title}}</h1>\n\t<div>\n\t\t<label>program name (.groovy): </label>\n\t\t<input [(ngModel)]=\"composeProgram.programName\" placeholder=\".groovy\">\n\t</div>\n\t<div>\n\t\t<textarea [(ngModel)]=\"composeProgram.program\" placeholder=\"compute code with data\"></textarea>\n\t</div>\n\tprogram configuration:\n\t<div>\n\t\t<textarea [(ngModel)]=\"composeProgram.configuration\"></textarea>\n\t</div>\n\t<button (click)=\"launchProgram()\">Launch program</button>\n\t<button (click)=\"getProgramStatus()\">Get Program Status</button>\n\t<button (click)=\"stopProgram()\">Stop program</button>\t\t\n\t<div>\n\t\t<textarea [(ngModel)]=\"serviceResponse\" readonly></textarea>\n\t</div>\n\t",
            providers: [composeProgram_service_1.ComposeProgramService]
        }), 
        __metadata('design:paramtypes', [composeProgram_service_1.ComposeProgramService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map