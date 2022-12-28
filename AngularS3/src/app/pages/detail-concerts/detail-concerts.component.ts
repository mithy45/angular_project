import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-concerts',
  templateUrl: './detail-concerts.component.html',
  styleUrls: ['./detail-concerts.component.css']
})
export class DetailConcertsComponent implements OnInit {

  nameArtist: any;
  constructor(
    private route: ActivatedRoute) { }

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
