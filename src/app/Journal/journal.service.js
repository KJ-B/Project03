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
var JournalService = (function () {
    function JournalService(http) {
        this.http = http;
        // last resort, not really configurable.
        // private theURL = `http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/?params=%5B%7B%22name%22:%22posts_per_page%22,%22value%22:%225%22%7D,%7B%22name%22:%22paged%22,%22value%22:%221%22%7D%5D`;
        /* backup URL to use below */
        // private journalUrl = 'http://localhost:4200/sample-journal-data.json';
        this.baseAPIKey = "94a08da1fecbb6e8b46990538c7b50b2";
        this.baseJournalUrl = "http://portal.helloitscody.com/inhabitent/api/get/" + this.baseAPIKey + "/?";
        this.baseJournalParams = "params=[{\"name\":\"posts_per_page\",\"value\":\"5\"},{\"name\":\"paged\",\"value\":\"1\"}]";
        this.journalUrl = this.baseJournalUrl + encodeURI(this.baseJournalParams);
        this.JournalArr = [];
        console.log("creating journal service");
    }
    ;
    JournalService.prototype.getJournals = function () {
        var _this = this;
        var JournalArr = "";
        // get the data
        var request = this.http.get(this.journalUrl);
        console.log(request);
        var requestAsPromise = request.toPromise();
        console.log(requestAsPromise);
        var taskToDoWhenWeGetPromise = function (response) {
            var returnedResponse = response.json();
            //
            /*let compareKeys = (a,b) => {
                    let aKeys = Object.keys(a).sort();
                    let bKeys = Object.keys(b).sort();
                    return JSON.stringify(aKeys).toLowerCase() === JSON.stringify(bKeys).toLowerCase();
                };
                let keyToCompare = new Journal();
                console.log(keyToCompare);
                for (let prop in returnedResponse){
                    let currentObject:Journal = <Journal>returnedResponse[prop];
                // console.log(currentObject);
                // console.log( compareKeys(currentObject, keyToCompare) );
                if (compareKeys(currentObject, keyToCompare)){
                    this.JournalArr.push(currentObject);
                }
            }*/
            // console.log(this.JournalArr);
            // console.log(response.json() as Journal[]);
            console.log("***** in journal.service.ts *****");
            // return response.json();
            return _this.JournalArr;
        };
        return requestAsPromise.then(taskToDoWhenWeGetPromise).catch(this.handleError);
    };
    JournalService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    JournalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JournalService);
    return JournalService;
}());
exports.JournalService = JournalService;
//# sourceMappingURL=journal.service.js.map