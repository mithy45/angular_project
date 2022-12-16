import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LastFmApiService } from 'src/app/services/last-fm-api.service';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit, OnChanges {

  @Input() searchForm: string;
  cards = [];

  constructor(private lastFmApiService: LastFmApiService) {
  }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    this.cards = [];
    let jsonSearchForm = JSON.parse(this.searchForm);
    if (jsonSearchForm.filter == "artist") {
      this.lastFmApiService.getListArtistBySearch(jsonSearchForm.search).subscribe(data => {
        let artists = data["results"]["artistmatches"]["artist"];
        artists.forEach(artist => {
          var card = {
            title: artist["name"],
            typeLabel: "listeners",
            type: artist["listeners"],
            url: artist["image"][1]["#text"]
          };
          this.cards.push(card);
        });
      });
    }
  }

}
