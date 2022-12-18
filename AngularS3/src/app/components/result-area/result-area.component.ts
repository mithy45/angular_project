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
        this.createCards(data["results"]["artistmatches"]["artist"], "name", "Listeners", "listeners");
      });
    } else if (jsonSearchForm.filter == "music") {
      this.lastFmApiService.getListTrackBySearch(jsonSearchForm.search).subscribe(data => {
        this.createCards(data["results"]["trackmatches"]["track"], "name", "Artist", "artist", "Listeners ", "listeners");
      });
    } else if (jsonSearchForm.filter == "album") {
      this.lastFmApiService.getListAlbumBySearch(jsonSearchForm.search).subscribe(data => {
        this.createCards(data["results"]["albummatches"]["album"], "name", "Artist", "artist");
      });
    }
  }

  createCards(datas : any[], titleKey : string, typeLabel : string, typeKey : string, description ?: string, descriptionKey ?: string) {
    datas.forEach(data => {
      var card = {
        title: data[titleKey],
        typeLabel: typeLabel,
        type: data[typeKey],
        url: data["image"][3]["#text"],
        description: description,
        descriptionKey : data[descriptionKey]
      };
      this.cards.push(card);
    });
  }
}
