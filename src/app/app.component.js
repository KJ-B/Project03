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
var journalentry_1 = require('./Journal/journalentry');
var journal_service_1 = require('./Journal/journal.service');
var AppComponent = (function () {
    function AppComponent(JournalService) {
        this.JournalService = JournalService;
        this.title = 'INHABITENT JOURNAL';
        this.selectedJournalEntry = journalentry_1.JournalEntry;
    }
    AppComponent.prototype.getJournalEntries = function () {
        var _this = this;
        this.JournalService.getJournals().then(function (JournalEntries) { return _this.journalEntries = JournalEntries; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getJournalEntries();
    };
    AppComponent.prototype.onSelect = function (journalEntry) {
        this.selectedJournalEntry = journalentry_1.JournalEntry;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>H\n    <ul class=\"JournalEntries\">\n      <li *ngFor=\"let journalEntry of journalEntries\"\n        [class.selected]=\"journalEntry === selectedJournalEntry\"\n        (click)=\"onSelect(journalEntry)\">\n        <span class=\"badge\">{{JournalEntry.id}}</span> {{journalEntry.name}}\n      </li>\n    </ul>\n    <my-journal-detail [journalEntry]=\"selectedJournalEntry\"></my-journal-detail>\n  ",
            providers: [journal_service_1.JournalService]
        }), 
        __metadata('design:paramtypes', [journal_service_1.JournalService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map