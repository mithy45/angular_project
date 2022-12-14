import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ResultAreaComponent } from './components/result-area/result-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArtistSearchComponent,
    ResultAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
