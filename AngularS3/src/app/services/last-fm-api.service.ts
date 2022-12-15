import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LastFmApiService {

    endPointURL = environment.baseURL_LastFM_API

  constructor(private httpClient: HttpClient) { }

  getListArtistBySearch(searchName : string, limit : number = 12, page: number = 0) : Observable<any> {
    let params = new HttpParams()
                .set("method", "artist.search")
                .set("limit", limit)
                .set("page", page)
                .set("artist", searchName)
                .set("api_key", environment.apiKey_LastFM_API)
                .set("format", environment.responseFormat);

    return this.httpClient.get(this.endPointURL, {params: params});
  }
}
