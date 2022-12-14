import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-detail',
  templateUrl: './nav-bar-detail.component.html',
  styleUrls: ['./nav-bar-detail.component.css']
})
export class NavBarDetailComponent implements OnInit {

  links = {
    "/details/artist" : "Artist",
    "/details/concert" : "Concert",
    "/details/album" : "Album",
    "/details/musique" : "Music",
  };

  currentRoute = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url
  }

}
