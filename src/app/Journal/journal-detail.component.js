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
var journalentry_1 = require('./journalentry');
var JournalDetailComponent = (function () {
    function JournalDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', journalentry_1.JournalEntry)
    ], JournalDetailComponent.prototype, "JournalEntry", void 0);
    JournalDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-journal-detail',
            template: "\n    <div *ngIf=\"hero\">\n      <h2>{{journalEntry.name}} details!</h2>\n      <div><label>id: </label>{{journalEntry.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"journalEntry.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], JournalDetailComponent);
    return JournalDetailComponent;
}());
exports.JournalDetailComponent = JournalDetailComponent;
//# sourceMappingURL=journal-detail.component.js.map