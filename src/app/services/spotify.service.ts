import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private requestUrl: string;
  private httpHeader: object;
  private params: object;
  private userId;

  constructor(private http: HttpClient) { }

  searchMusic(queryString: string, type: string, accessToken: string) {
    this.requestUrl = 'https://api.spotify.com/v1/search?q=' + queryString + '&type=' + type;

    this.httpHeader = {
      headers: new HttpHeaders().set('Accept', 'application/json')
                                .set('Content-Type', 'application/json')
                                .set('Authorization', 'Bearer ' + accessToken)
    };

    return this.http.get(this.requestUrl, this.httpHeader);
  }

  createPlaylist(playlistName: string, accessToken: string, userId: string) {

    this.requestUrl = 'https://api.spotify.com/v1/users/' + userId + '/playlists';

    this.httpHeader = {
      headers: new HttpHeaders().set('Accept', 'application/json')
                                .set('Content-Type', 'application/json')
                                .set('Authorization', 'Bearer ' + accessToken)
    };

    this.params = {
      name: playlistName
    };

    return this.http.post(this.requestUrl, this.params, this.httpHeader);
  }

  addToPlaylist(playlistId: string, uri: string, accessToken: string) {
    this.requestUrl = 'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks?uris=' + uri ;

    this.httpHeader = {
      headers: new HttpHeaders().set('Accept', 'application/json')
                                .set('Content-Type', 'application/json')
                                .set('Authorization', 'Bearer ' + accessToken)
    };

    this.params = {};

    return this.http.post(this.requestUrl, this.params, this.httpHeader);
  }

  getUserId(accessToken: string) {
    this.requestUrl = 'https://api.spotify.com/v1/me';

    this.httpHeader = {
      headers: new HttpHeaders().set('Accept', 'application/json')
                                .set('Content-Type', 'application/json')
                                .set('Authorization', 'Bearer ' + accessToken)
    };

    return this.http.get(this.requestUrl, this.httpHeader);
  }
}
