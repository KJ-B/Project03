import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Journal } from './journal';
import { JournalService } from './journal.service';

@Component({
  moduleId: module.id,
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  journalEntries: Journal[] = [];
  constructor(private journalService: JournalService, private router: Router) 
  {
    console.log("creating journal component");
  }

  ngOnInit(): void {

  	this.getJournals();
     console.log(this.journalEntries);
  }

  getJournals(): void {
    console.log('getting journals');
    let myPromiseOfJournals:Promise<Journal[]> = this.journalService.getJournals();

    myPromiseOfJournals.then(
  	    journals => {

        this.journalEntries = <Journal[]>journals;
            console.log("***** in journal.component.ts callback *****");
            console.log(this.journalEntries);
        /*
        console.log(this.journalEntries);
        console.log("***** in journal.component.ts callback *****");
        */
  	    });
  }

}
