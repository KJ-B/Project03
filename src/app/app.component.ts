import { Component } from '@angular/core';
import { JournalEntry }   from './Journal/journalentry';
import { JournalService } from './Journal/journal.service';


const JournalEntries: JournalEntry [] = [
	{ id: 0, title: 'this is a post with a long title' },
	{ id: 1, title: 'tester jermey'                    },
	{ id: 2, title: 'jjhkhkjhkjhk'                     },
	{ id: 3, title: 'afdadfafdadf'                     },
	{ id: 4, title: 'jjhkhkjhkjhk'                     }
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
        <span class="badge">{{JournalEntry.id}}</span> {{journalEntry.name}}
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
  journalEntry: JournalEntry;
  selectedJournalEntry = JournalEntry;


onSelect(journalEntry: JournalEntry): void {
    this.selectedJournalEntry = JournalEntry;
  }
}
	


