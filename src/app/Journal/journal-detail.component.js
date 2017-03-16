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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var journalentry_1 = require('../Journal/journalentry');
var journal_service_1 = require('../Journal/journal.service');
var JournalDetailComponent = (function () {
    function JournalDetailComponent(journalEntryService, route, location) {
        this.journalEntryService = journalEntryService;
        this.route = route;
        this.location = location;
    }
    JournalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            .switchMap(function (params) { return _this.JournalService.journalEntry(+params['id']); })
            .subscribe(function (journalEntry) { return _this.journalEntry = journalentry_1.JournalEntry; });
    };
    JournalDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    JournalDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-journal-detail',
            templateUrl: '../Journal/journal-detail.component.html',
            styleUrls: ['../Journal.journal-detail.component.css']
        }), 
        __metadata('design:paramtypes', [journal_service_1.JournalService, router_1.ActivatedRoute, common_1.Location])
    ], JournalDetailComponent);
    return JournalDetailComponent;
}());
exports.JournalDetailComponent = JournalDetailComponent;
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
//# sourceMappingURL=journal-detail.component.js.map