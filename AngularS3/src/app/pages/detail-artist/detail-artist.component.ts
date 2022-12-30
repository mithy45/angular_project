import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastFmApiService } from 'src/app/services/last-fm-api.service';

@Component({
  selector: 'app-detail-artist',
  templateUrl: './detail-artist.component.html',
  styleUrls: ['./detail-artist.component.css']
})
export class DetailArtistComponent implements OnInit {

    error = "";
    data : any;
    nameArtist : any;
    imageUrl : string = "";
    infos = {};
    links = {};
    similars: any;
    description: string;
  
    constructor(
      private service : LastFmApiService,
      private route: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.nameArtist = params['name'];
       
        this.service.getArtistInfo(this.nameArtist).subscribe(data => {
          this.imageUrl = data.artist.image[4]["#text"]
          this.infos = [
            ["Listeners" , data.artist.stats.listeners],
            ["Playcount" , data.artist.stats.playcount]
          ];
          if (data.artist.bio.content) {
            this.description = data.artist.bio.content;
          } else {
            this.description = "no description available";
          }
          this.similars = data.artist.similar.artist;
          this.similars.forEach(similar => {
            similar["imageUrl"] = similar.image[0]["#text"];
          });
        });
      });
    }
  }
  