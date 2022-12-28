import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-albums',
  templateUrl: './detail-albums.component.html',
  styleUrls: ['./detail-albums.component.css']
})
export class DetailAlbumsComponent implements OnInit {

  nameArtist: any;

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
      console.log(params);
    });
  }

}
