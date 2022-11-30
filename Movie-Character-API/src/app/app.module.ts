import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';

@NgModule({
  declarations: [AppComponent, MoviePageComponent, CharacterItemComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
