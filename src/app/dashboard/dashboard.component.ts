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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.token = sessionStorage.getItem('access_token');
  }

  searchArtist() {
    this.spotifyService.searchMusic(this.searchStr, 'artist', this.token)
    .subscribe(result => {
      this.searchArtistRes = result['artists'].items;
    });
  }

}
