import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LastFmApiService } from 'src/app/services/last-fm-api.service';

@Component({
  selector: 'app-detail-albums',
  templateUrl: './detail-albums.component.html',
  styleUrls: ['./detail-albums.component.css']
})
export class DetailAlbumsComponent implements OnInit {

  error = "";
  data : any;
  nameArtist : any;
  albums: any;

  constructor(
    private service : LastFmApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nameArtist = params['name'];
    });

    this.service.getAllAlbumsByArtist(this.nameArtist).subscribe(data => {
      if (!data) {
        this.error = "Aucun artist correspondant.";
        return;
      }
      this.albums = data.topalbums.album;
      this.albums.forEach(album => {
        album["imageUrl"] = album.image[0]["#text"];
      });
      if (!this.albums) {
        this.error = "Aucun album trouvée.";
        return;
      }
    })
  }

}
