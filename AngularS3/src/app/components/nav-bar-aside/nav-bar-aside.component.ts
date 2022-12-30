import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-aside',
  templateUrl: './nav-bar-aside.component.html',
  styleUrls: ['./nav-bar-aside.component.css']
})
export class NavBarAsideComponent implements OnInit {

  @Input() nameArtist: string;
  error = "";
  links = [];
  
  constructor() { }

  ngOnInit(): void {
    if (!this.nameArtist) {
      this.error = "nameArtist n'est pas transmi en paramètre";
    }
    this.links = [
      [" The artist", ["/details/artist", "../../../assets/person-circle-outline.svg"]],
      [" His albums" ,["/details/albums",  "../../../assets/albums-outline.svg"]],
      [" His others Musics" , ["/details/musics",  "../../../assets/musical-notes-outline.svg"]],
    ];
  }

}
