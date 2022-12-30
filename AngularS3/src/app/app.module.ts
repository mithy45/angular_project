import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultAreaComponent } from './components/result-area/result-area.component';
import { NavBarDetailComponent } from './components/nav-bar-detail/nav-bar-detail.component';

import { RoutingModule } from './modules/routing/routing.module';
import { DetailArtistComponent } from './pages/detail-artist/detail-artist.component';
import { DetailAlbumComponent } from './pages/detail-album/detail-album.component';
import { DetailMusiqueComponent } from './pages/detail-musique/detail-musique.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailAlbumsComponent } from './pages/detail-albums/detail-albums.component';
import { DetailMusiquesComponent } from './pages/detail-musiques/detail-musiques.component';
import { NavBarAsideComponent } from './components/nav-bar-aside/nav-bar-aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ResultAreaComponent,
    NavBarDetailComponent,
    DetailArtistComponent,
    DetailAlbumComponent,
    DetailMusiqueComponent,
    HeaderComponent,
    FooterComponent,
    DetailAlbumsComponent,
    DetailMusiquesComponent,
    NavBarAsideComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
