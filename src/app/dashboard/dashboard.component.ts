/*import { Component, OnInit } from '@angular/core';

import { JournalEntry } from '../Journal/journalentries';
import { JournalService } from '../Journal/journal.service';

@Component({
moduleId: module.id,
selector: 'my-dashboard',
templateUrl: '.dashboard.component.html',
styleUrls: [ './dashboard.component.css']
})
/*export class DashboardComponent implement OnInit {
  
  journalEntries: JournalEntry[] = [];
  
  constructor(private journalService: JournalService) { }

  ngOnit(): void {
    this.journalService.getJournalEntries(id) .then((journalEntry:JournalEntry) => this.journalEntry = journalEntry);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/