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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ComposeProgramService = (function () {
    function ComposeProgramService(http) {
        this.http = http;
        this.composeUrl = 'http://localhost:4000/compose'; // URL to web api
        this.statusURL = this.composeUrl + '/status';
        this.errorMessage = 'err';
    }
    ComposeProgramService.prototype.getProgram = function () {
        return this.http.get(this.composeUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ComposeProgramService.prototype.getProgramStatus = function () {
        return this.http.get(this.statusURL)
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    ComposeProgramService.prototype.stopProgram = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = "" + this.statusURL;
        return this.http
            .put(url, "azerty", { headers: headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(function (response) { return Promise.reject(new Error(response._body + ' ' + response.status + ' ' + response.statusText)); });
    };
    ComposeProgramService.prototype.saveProgram = function (composeProgram) {
        return this.put(composeProgram);
    };
    ComposeProgramService.prototype.put = function (composeProgram) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = "" + this.composeUrl;
        return this.http
            .put(url, JSON.stringify(composeProgram), { headers: headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(function (response) { return Promise.reject(new Error(response._body + ' ' + response.status + ' ' + response.statusText)); });
    };
    ComposeProgramService.prototype.handleError = function (error) {
        console.error(error.status + '+' + error.statusText);
        //return Promise.reject(error.message || error);
        return Promise.reject(error);
    };
    ComposeProgramService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ComposeProgramService);
    return ComposeProgramService;
}());
exports.ComposeProgramService = ComposeProgramService;
//# sourceMappingURL=composeProgram.service.js.map