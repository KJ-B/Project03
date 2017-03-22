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
var journal_service_1 = require('../Journal/journal.service');
var JournalEntriesComponent = (function () {
    function JournalEntriesComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    JournalEntriesComponent.prototype.getJournalEntries = function () {
        var _this = this;
        this.service.getJournalEntry().then(function (JournalEntries) { return _this.journalEntries = JournalEntries; });
    };
    JournalEntriesComponent.prototype.ngOnInit = function () {
        this.getJournalEntries();
    };
    JournalEntriesComponent.prototype.onSelect = function (journalEntry) {
        this.selectedJournalEntry = journalEntry;
    };
    JournalEntriesComponent = __decorate([
        core_1.Component({
            selector: 'my-journalentries',
            templateUrl: './journalentries.component.html',
            styleUrls: ['./journalentries.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, journal_service_1.JournalService])
    ], JournalEntriesComponent);
    return JournalEntriesComponent;
}());
exports.JournalEntriesComponent = JournalEntriesComponent;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=journalentriescomponent.js.map