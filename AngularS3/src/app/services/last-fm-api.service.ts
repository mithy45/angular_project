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

    getListArtistBySearch(artist: string, limit: number = 12, page: number = 1) : Observable<any> {
        let params = new HttpParams()
                    .set("method", "artist.search")
                    .set("limit", limit)
                    .set("page", page)
                    .set("artist", artist)
                    .set("api_key", environment.apiKey_LastFM_API)
                    .set("format", environment.responseFormat);

        return this.httpClient.get(this.endPointURL, {params: params});
    }

    getArtistInfo(artist: string) : Observable<any> {
        let params = new HttpParams()
                    .set("method", "artist.getInfo")
                    .set("artist", artist)
                    .set("api_key", environment.apiKey_LastFM_API)
                    .set("format", environment.responseFormat);

        return this.httpClient.get(this.endPointURL, {params: params});
    }

    getAllAlbumsByArtist(artist: string) : Observable<any> {
        let params = new HttpParams()
                    .set("method", "artist.gettopalbums")
                    .set("artist", artist)
                    .set("api_key", environment.apiKey_LastFM_API)
                    .set("format", environment.responseFormat);

        return this.httpClient.get(this.endPointURL, {params: params});
    }

    getAlbumInfo(album: string, artist: string) : Observable<any> {
        let params = new HttpParams()
                    .set("method", "album.getinfo")
                    .set("album", album)
                    .set("artist", artist)
                    .set("api_key", environment.apiKey_LastFM_API)
                    .set("format", environment.responseFormat);

        return this.httpClient.get(this.endPointURL, {params: params});
    }

    getListTrackBySearch(track: string, artist?: string, limit: number = 12, page: number = 1) : Observable<any> {
        let params = new HttpParams()
                    .set("method", "track.search")
                    .set("limit", limit)
                    .set("page", page)
                    .set("track", track)
                    .set("api_key", environment.apiKey_LastFM_API)
                    .set("format", environment.responseFormat);
        
        if (artist)
            params = params.set("artist", artist);

        return this.httpClient.get(this.endPointURL, {params: params});
    }

    getTrackInfo(track: string, artist: string) : Observable<any> {
        let params = new HttpParams()
                    .set("method", "track.getinfo")
                    .set("track", track)
                    .set("artist", artist)
                    .set("api_key", environment.apiKey_LastFM_API)
                    .set("format", environment.responseFormat);
        return this.httpClient.get(this.endPointURL, {params: params});
    }

    getAllTracksByArtist(artist: string) : Observable<any> {
        let params = new HttpParams()
                    .set("method", "artist.gettoptracks")
                    .set("artist", artist)
                    .set("api_key", environment.apiKey_LastFM_API)
                    .set("format", environment.responseFormat);

        return this.httpClient.get(this.endPointURL, {params: params})
    }
}
