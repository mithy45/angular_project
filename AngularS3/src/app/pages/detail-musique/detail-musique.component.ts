import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LastFmApiService } from 'src/app/services/last-fm-api.service';

@Component({
  selector: 'app-detail-musique',
  templateUrl: './detail-musique.component.html',
  styleUrls: ['./detail-musique.component.css']
})
export class DetailMusiqueComponent implements OnInit {

  error = "";
  data : any;
  nameArtist : any;
  infos = {};
  music: any;
  links = {};

  constructor(
    private service : LastFmApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nameArtist = params['artist'];
      this.music = params['name'];
     
      // Redirect if no name.
      if (!this.nameArtist || !this.music) {
        //this.router.navigate(["/"]);
      }
      console.log(this.nameArtist, this.music);
      this.service.getTrackInfo(this.music, this.nameArtist).subscribe(data => {
        let minutes = parseInt("" + ((data.track.duration / 1000) / 60));
        let secondes = (data.track.duration / 1000) % 60;
        this.infos = [
          ["Album" , data.track.album?.title],
          ["Duration" , minutes +":" +secondes],
          ["Published", data.track.wiki.published],
          ["Listeners" , data.track.listeners],
          ["Playcount" , data.track.playcount],
          ["Description" , data.track.wiki.content],
        ];

        console.log(data.track, this.infos);
      });
      
    });
  }

}
