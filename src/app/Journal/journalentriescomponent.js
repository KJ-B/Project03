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
var journalentry_1 = require('../Journal/journalentry');
var journal_service_1 = require('../Journal/journal.service');
var JournalEntriesComponent = (function () {
    function JournalEntriesComponent(router, Service) {
        this.router = router;
        this.Service = Service;
    }
    JournalEntriesComponent.prototype.getJournalEntries = function () {
        var _this = this;
        this.JournalService.getJournals().then(function (JournalEntries) { return _this.journalEntries = JournalEntries; });
    };
    JournalEntriesComponent.prototype.ngOnInit = function () {
        this.getJournalEntries();
    };
    JournalEntriesComponent.prototype.onSelect = function (journalEntry) {
        this.selectedJournalEntry = journalentry_1.JournalEntry;
    };
    JournalEntriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
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
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedJournalEntry.id]);
  } s



/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=journalentriescomponent.js.map