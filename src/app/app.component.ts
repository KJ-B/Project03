import { Component } from '@angular/core';
import { Journal }   from './Journal/journal';

export class JournalEntry {
	id: number;
	name: string;
}

const JournalEntries: JournalEntry[] = [
	{ id: 13, name: 'Camping' },
	{ id: 14, name: 'Beverages' },
	{ id: 16, name: 'Meals' },
	{ id: 19, name: 'Tips' },
	{ id: 10, name: 'Guide' }
];


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Journal Entries</h2>
    <ul class="JournalEntries">
      <li *ngFor="let journalEntry of journalEntries"
        [class.selected]="journalEntry === selectedJournalEntry"
        (click)="onSelect(journalEntry)">
        <span class="badge">{{journalEntry.id}}</span> {{journalEntry.name}}
      </li>
    </ul>
    <div *ngIf="selectedJournalEntry">
      <h2>{{selectedJournalEntry.name}} details!</h2>
      <div><label>id: </label>{{selectedJournalEntry.name}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedJournalEntry.name" placeholder="name"/>
      </div>
    </div>
  `,

})	

export class AppComponent {
  title = 'INHABITENT JOURNAL';
  JournalEntry: JournalEntry;
  selectedJournalEntry = JournalEntry;


onSelect(journalEntry: JournalEntry): void {
    this.selectedJournalEntry = JournalEntry;
  }
}
	

}	
