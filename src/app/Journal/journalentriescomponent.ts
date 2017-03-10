import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JournalEntry } from '../Journal/journalentry';
import { JournalService } from '../Journal/journal.service';

@Component ({ 
  moduleId: module.id,
  selector: 'my-journalentries',
  templateUrl: './journalentries.component.html',
  styleUrls: [ './journalentries.component.css' ]
})

export class JournalEntriesComponent implements OnInit {
  JournalEntries: JournalEntry[];
  selectedJournalEntry: JournalEntry;

  constructor(
    private router: Router,
    private Service: JournalService) { }

 
  getJournalEntries(): void {
    this.JournalService.getJournals().then(JournalEntries => this.journalEntries = JournalEntries);
  }

  ngOnInit(): void {
    this.getJournalEntries();
  }

  onSelect(journalEntry: JournalEntry): void {
    this.selectedJournalEntry = JournalEntry;
  }
}
  
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