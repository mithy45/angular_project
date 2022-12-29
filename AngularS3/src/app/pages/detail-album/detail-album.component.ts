import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LastFmApiService } from 'src/app/services/last-fm-api.service';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit {

  error = "";
  data : any;
  nameArtist : any;
  imageUrl : string = "";
  infos = {};
  album: any;
  links = {};
  musics: any;
  description: string;

  constructor(
    private service : LastFmApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nameArtist = params['artist'];
      this.album = params['name'];
     
      console.log(this.nameArtist, this.album);
      this.service.getAlbumInfo(this.album, this.nameArtist).subscribe(data => {
        this.imageUrl = data.album.image[5]["#text"]
        this.infos = [
          ["Published", data.album.wiki.published],
          ["Listeners" , data.album.listeners],
          ["Playcount" , data.album.playcount]
        ];
        this.description = data.album.wiki.content;
        this.musics = data.album.tracks.track;
      });
      
    });
  }

}
