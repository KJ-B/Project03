import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { JournalDetailComponent } from './Journal/journal-detail.component';

@NgModule({
  imports:  [
  BrowserModule,
  FormsModule
  ],
  declarations: [ 
  AppComponent,
  JournalDetailComponent],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }

