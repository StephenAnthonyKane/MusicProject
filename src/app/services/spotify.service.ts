import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private searchUrl: string;
  private httpHeader: object;

  constructor(private http: HttpClient) { }

  searchMusic(queryString: string, type: string, accessToken: string) {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + queryString + '&type=' + type;

    this.httpHeader = {
      headers: new HttpHeaders().set('Accept', 'application/json')
                                .set('Content-Type', 'application/json')
                                .set('Authorization', 'Bearer ' + accessToken)
    };

    return this.http.get(this.searchUrl, this.httpHeader);
  }

}
