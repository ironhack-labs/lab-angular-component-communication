import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersItemComponent } from './components/characters-item/characters-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
