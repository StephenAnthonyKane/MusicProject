import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../../classes/Artist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private token: string;
  private searchStr: string;
  private searchArtistRes: Artist[];
  private songs: object;
  private playlistId: string;
  private roomCode: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.token = sessionStorage.getItem('accessToken');
    this.playlistId = sessionStorage.getItem('playlistId');
    this.roomCode = sessionStorage.getItem('roomCode');
  }

  searchArtist() {
    this.spotifyService.searchMusic(this.searchStr, 'artist', this.token)
    .subscribe(result => {
      this.searchArtistRes = result['artists'].items;
    });
  }

  searchTrack() {
    this.spotifyService.searchMusic(this.searchStr, 'track', this.token)
    .subscribe(result => {
      console.log(result['tracks']['items']);
      this.songs = result['tracks'].items;
    });
  }

  addToPlaylist(trackId) {
    this.spotifyService.addToPlaylist(this.playlistId , trackId, this.token)
    .subscribe(result => {
      alert('Added');
    });
  }
}
