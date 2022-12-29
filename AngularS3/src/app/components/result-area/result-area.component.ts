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
  filter = "artist";

  constructor(private lastFmApiService: LastFmApiService) {
  }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    this.cards = [];
    let jsonSearchForm = JSON.parse(this.searchForm);
    this.filter = jsonSearchForm.filter;
    if (jsonSearchForm.filter == "artist") {
      this.lastFmApiService.getListArtistBySearch(jsonSearchForm.search).subscribe(data => {
        this.createCards(data["results"]["artistmatches"]["artist"], "name", "Listeners", "listeners", jsonSearchForm.filter);
      });
    } else if (jsonSearchForm.filter == "music") {
      this.lastFmApiService.getListTrackBySearch(jsonSearchForm.search).subscribe(data => {
        this.createCards(data["results"]["trackmatches"]["track"], "name", "Artist", "artist", jsonSearchForm.filter, "Listeners ", "listeners");
      });
    } else if (jsonSearchForm.filter == "album") {
      this.lastFmApiService.getListAlbumBySearch(jsonSearchForm.search).subscribe(data => {
        this.createCards(data["results"]["albummatches"]["album"], "name", "Artist", "artist", jsonSearchForm.filter);
      });
    }
  }

  createCards(datas : any[], titleKey : string, typeLabel : string, typeKey : string, filter : string, description ?: string, descriptionKey ?: string) {
    datas.forEach(data => {
      let optionUrl = this.createOptionUrl(data, filter);

      var card = {
        title: data[titleKey],
        typeLabel: typeLabel,
        type: data[typeKey],
        url: data["image"][3]["#text"],
        description: description,
        descriptionKey : data[descriptionKey],
        optionUrl: optionUrl
      };
      this.cards.push(card);
    });
  }

  createOptionUrl(data : any, filter : string) {
    let optionUrl = "";
    console.log(filter);
    if (filter == "artist") {
      optionUrl = "artist=" + data["name"];
    } else if (filter == "music" || filter == "album") {
      optionUrl = "artist=" + data["artist"] + "&name=" + data["name"];
    }
    console.log(data);
    return optionUrl;
  }
}
