import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ResultAreaComponent } from './components/result-area/result-area.component';
import { NavBarDetailComponent } from './components/nav-bar-detail/nav-bar-detail.component';

import { RoutingModule } from './modules/routing/routing.module';
import { DetailConcertComponent } from './pages/detail-concert/detail-concert.component';
import { DetailArtistComponent } from './pages/detail-artist/detail-artist.component';
import { DetailAlbumComponent } from './pages/detail-album/detail-album.component';
import { DetailMusiqueComponent } from './pages/detail-musique/detail-musique.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArtistSearchComponent,
    ResultAreaComponent,
    NavBarDetailComponent,
    DetailConcertComponent,
    DetailArtistComponent,
    DetailAlbumComponent,
    DetailMusiqueComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
