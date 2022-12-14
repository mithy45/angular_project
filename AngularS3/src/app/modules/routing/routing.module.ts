import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarDetailComponent } from 'src/app/components/nav-bar-detail/nav-bar-detail.component';
import { DetailAlbumComponent } from 'src/app/pages/detail-album/detail-album.component';
import { DetailArtistComponent } from 'src/app/pages/detail-artist/detail-artist.component';
import { DetailConcertComponent } from 'src/app/pages/detail-concert/detail-concert.component';
import { DetailMusiqueComponent } from 'src/app/pages/detail-musique/detail-musique.component';

const routes: Routes = [
  { path: 'details/album', component: DetailAlbumComponent },
  { path: 'details/artist', component: DetailArtistComponent },
  { path: 'details/concert', component: DetailConcertComponent },
  { path: 'details/musique', component: DetailMusiqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }