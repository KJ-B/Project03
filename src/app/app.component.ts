import { Component, OnInit } from '@angular/core';
import { JournalEntry }   from './Journal/journalentry';
import { JournalService } from './Journal/journal.service';
import { JournalEntries } from './Journal/journalentries';
import { JournalDetailComponent } from './Journal/journal-detail.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>H
    <ul class="JournalEntries">
      <li *ngFor="let journalEntry of journalEntries"
        [class.selected]="journalEntry === selectedJournalEntry"
        (click)="onSelect(journalEntry)">
        <span class="badge">{{JournalEntry.id}}</span> {{journalEntry.name}}
      </li>
    </ul>
    <my-journal-detail [journalEntry]="selectedJournalEntry"></my-journal-detail>
  `,
 providers: [JournalService] 
})
 


export class AppComponent implements OnInit {
  title = 'INHABITENT JOURNAL';
  journalEntries: JournalEntry[];
  selectedJournalEntry = JournalEntry;

  constructor(private JournalService: JournalService) { }
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
	



  

