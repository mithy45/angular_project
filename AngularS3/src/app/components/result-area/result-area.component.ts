import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {

  src = "../assets/person-circle-outline.svg";
  cards = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

}