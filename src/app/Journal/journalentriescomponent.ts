import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JournalEntry } from '../Journal/journalentry';
import { JournalService } from '../Journal/journal.service';

@Component ({ 
  selector: 'my-journalentries',
  templateUrl: './journalentries.component.html',
  styleUrls: [ './journalentries.component.css' ]
})

export class JournalEntriesComponent implements OnInit {
  journalEntries: JournalEntry[];
  selectedJournalEntry: JournalEntry;

  constructor(
    private router: Router,
    private service: JournalService) { }
 
  getJournalEntries(): void {
    this.service.getJournalEntry().then(JournalEntries => this.journalEntries = JournalEntries);
  }

  ngOnInit(): void {
    this.getJournalEntries();
  }

  onSelect(journalEntry: JournalEntry): void {
    this.selectedJournalEntry = journalEntry;
  }
}
  




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