import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-detail',
  templateUrl: './nav-bar-detail.component.html',
  styleUrls: ['./nav-bar-detail.component.css']
})
export class NavBarDetailComponent implements OnInit {

  @Input() name: string;

  links = {};

  currentRoute = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    this.currentRoute = this.currentRoute.split("?")[0];
    this.links = {
      "Artist" : ("/details/artist"),
      "Concerts" : ("/details/concerts"),
      "Albums" : ("/details/albums"),
      "Musics" : ("/details/musics"),
    };

  }

}
