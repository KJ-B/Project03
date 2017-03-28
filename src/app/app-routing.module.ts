import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { JournalEntriesComponent } from './Journal/journalentriescomponent';
import { JournalDetailComponent } from './Journal/journal-detail.component';

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
