import { Component, OnInit } from '@angular/core';
import { JournalEntry }   from './Journal/journalentry';
import { JournalService } from './Journal/journal.service';
import { JournalEntries } from './Journal/journalentries';
import { JournalDetailComponent } from './Journal/journal-detail.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActifve="active">JournalEntries</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titlte = 'Inhabitent Journal Entries';
}


 
 






  

