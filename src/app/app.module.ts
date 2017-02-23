import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { JournalDetailComponent } from './Journal/journal-detail.component';
import { JournalService } from './Journal/journal.service';

@NgModule({
  imports:  [
  BrowserModule,
  FormsModule
  ],
  declarations: [ 
  AppComponent,
  JournalDetailComponent

  ],
  providers:     [ JournalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

