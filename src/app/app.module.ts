import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson003Component } from './lesson003/lesson003.component';
import { Child003Component } from './lesson003/child003/child003.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    Lesson02Component,
    Lesson003Component,
    Child003Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
