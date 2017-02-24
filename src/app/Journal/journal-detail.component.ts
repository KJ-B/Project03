import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { JournalEntry }    from '../Journal/journalentry';
import { JournalService }  from '../Journal/journal.service';
@Component({
  moduleId: module.id,
  selector: 'my-journal-detail',
  templateUrl: '../Journal/journal.component.html',
  styleUrls: ['../Journal.journal.component.css']
})
export class JournalDetailComponent implements OnInit {
  journalEntry: JournalEntry;

  constructor(
    private journalEntryService: JournalService,
    private route: ActivatedRoute,
    private location: Location

    ) {}

    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.journalEntryService.getJournalEntry(+params['id']))
        .subscribe (hero => this.journalEntry);    
    }
    goBack(): void {
      this.location.back();
    } 
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/