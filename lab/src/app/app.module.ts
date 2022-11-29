import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './COMPONENTS/movies-page/movies-page.component';
import { CharacterDetailComponent } from './COMPONENTS/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
