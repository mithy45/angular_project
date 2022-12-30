import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarDetailComponent } from 'src/app/components/nav-bar-detail/nav-bar-detail.component';
import { DetailAlbumComponent } from 'src/app/pages/detail-album/detail-album.component';
import { DetailArtistComponent } from 'src/app/pages/detail-artist/detail-artist.component';
import { DetailMusiqueComponent } from 'src/app/pages/detail-musique/detail-musique.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { DetailAlbumsComponent } from 'src/app/pages/detail-albums/detail-albums.component';
import { DetailMusiquesComponent } from 'src/app/pages/detail-musiques/detail-musiques.component';

const routes: Routes = [
  { path: 'details/albums', component: DetailAlbumsComponent },
  { path: 'details/album', component: DetailAlbumComponent },
  { path: 'details/artist', component: DetailArtistComponent },
  { path: 'details/musics', component: DetailMusiquesComponent },
  { path: 'details/music', component: DetailMusiqueComponent },
  { path: 'home', component: HomePageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }