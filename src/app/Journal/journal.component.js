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
var router_1 = require('@angular/router');
var journal_service_1 = require('./journal.service');
var JournalComponent = (function () {
    function JournalComponent(journalService, router) {
        this.journalService = journalService;
        this.router = router;
        this.journalEntries = [];
        console.log("creating journal component");
    }
    JournalComponent.prototype.ngOnInit = function () {
        this.getJournals();
        console.log(this.journalEntries);
    };
    JournalComponent.prototype.getJournals = function () {
        var _this = this;
        console.log('getting journals');
        var myPromiseOfJournals = this.journalService.getJournals();
        myPromiseOfJournals.then(function (journals) {
            _this.journalEntries = journals;
            console.log("***** in journal.component.ts callback *****");
            console.log(_this.journalEntries);
            /*
            console.log(this.journalEntries);
            console.log("***** in journal.component.ts callback *****");
            */
        });
    };
    JournalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-journal',
            templateUrl: './journal.component.html',
            styleUrls: ['./journal.component.css']
        }), 
        __metadata('design:paramtypes', [journal_service_1.JournalService, router_1.Router])
    ], JournalComponent);
    return JournalComponent;
}());
exports.JournalComponent = JournalComponent;
//# sourceMappingURL=journal.component.js.map