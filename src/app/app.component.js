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
var JournalEntry = (function () {
    function JournalEntry() {
    }
    return JournalEntry;
}());
exports.JournalEntry = JournalEntry;
var JournalEntries = [
    { id: 13, name: 'Camping' },
    { id: 14, name: 'Beverages' },
    { id: 16, name: 'Meals' },
    { id: 19, name: 'Tips' },
    { id: 10, name: 'Guide' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'INHABITENT JOURNAL';
        this.selectedJournalEntry = JournalEntry;
    }
    AppComponent.prototype.onSelect = function (journalEntry) {
        this.selectedJournalEntry = JournalEntry;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Journal Entries</h2>\n    <ul class=\"JournalEntries\">\n      <li *ngFor=\"let journalEntry of journalEntries\"\n        [class.selected]=\"journalEntry === selectedJournalEntry\"\n        (click)=\"onSelect(journalEntry)\">\n        <span class=\"badge\">{{journalEntry.id}}</span> {{journalEntry.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedJournalEntry\">\n      <h2>{{selectedJournalEntry.name}} details!</h2>\n      <div><label>id: </label>{{selectedJournalEntry.name}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedJournalEntry.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map