import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { LastFmApiService } from 'src/app/services/last-fm-api.service';

@Component({
  selector: 'app-detail-musiques',
  templateUrl: './detail-musiques.component.html',
  styleUrls: ['./detail-musiques.component.css']
})
export class DetailMusiquesComponent implements OnInit {

  error = "";
  data : any;
  nameArtist : any;
  musics: any;

  constructor(
    private service : LastFmApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nameArtist = params['name'];
      // Redirect if no name.
      if (!this.nameArtist) {
        //this.router.navigate(["/"]);
      }
      console.log(this.nameArtist);
    });
    this.service.getAllTracksByArtist(this.nameArtist).subscribe(data => {
      if (!data) {
        this.error = "Aucun artist correspondant.";
        return;
      }
      this.musics = data.toptracks.track;
      if (!this.musics) {
        this.error = "Aucune musique trouvée.";
        return;
      }
      this.musics = this.musics.slice(0, 20);
      console.log(this.musics);
 
    })
  }

}
