import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CharItemComponent } from './components/char-item/char-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CreateCharComponent } from './components/create-char/create-char.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharItemComponent,
    CreateCharComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
