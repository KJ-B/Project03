import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from './Dashboard/dashboard.component';
import { JournalEntriesComponent } from './Journal/journalentries';
import { JournalDetailComponent } from './Journal/journal.service';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard',      component: DashboardComponent },
	{ path: 'detail/:id',     component: JournalDetailComponent },
	{ path: 'journalEntries', component: JournalEntriesComponent },

];

@NgModule({
  imports:  [ RouterModule.forRoot(routes) ],
  exports:  [ RouterModule]
})
export class AppModule { }
