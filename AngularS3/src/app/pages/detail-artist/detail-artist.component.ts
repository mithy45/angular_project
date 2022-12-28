import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-artist',
  templateUrl: './detail-artist.component.html',
  styleUrls: ['./detail-artist.component.css']
})
export class DetailArtistComponent implements OnInit {
  nameArtist : any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
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
  }

}
