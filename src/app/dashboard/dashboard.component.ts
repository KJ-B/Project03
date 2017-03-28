import { Component, OnInit } from '@angular/core';
import { JournalEntry } from '../Journal/journalentry';
import { JournalService } from '../Journal/journal.service';
import { JournalEntries } from '../Journal/journalentries';

@Component({
	selector: 'my-dashboard',
	templateUrl: '../dashboard/dashboard.component.html',
	styleUrls: [ '../dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	journalEntries: JournalEntry[] = [];

	constructor(private journalService: JournalService) { }
	
	ngOnInit(): void {
		//this.journalService.getJournalEntries()
			//.then(journalEntry => this.journalEntries = journalEntry.slice(1,2));
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