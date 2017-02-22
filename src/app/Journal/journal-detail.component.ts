import { Component, Input } from '@angular/core';

import { JournalEntry } from './journalentry';

@Component({
  selector: 'my-journal-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{journalEntry.name}} details!</h2>
      <div><label>id: </label>{{journalEntry.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="journalEntry.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class JournalDetailComponent {
  @Input()
  JournalEntry: JournalEntry;
}