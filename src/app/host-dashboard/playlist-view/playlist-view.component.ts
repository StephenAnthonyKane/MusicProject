import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {

  private token: string;
  private playlistId: string;
  private roomCode: string;
  private tracks: object[];

  constructor(private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit() {
    this.token = sessionStorage.getItem('accessToken');
    this.playlistId = sessionStorage.getItem('playlistId');
    this.roomCode = sessionStorage.getItem('roomCode');
  }

  getPlaylist(){
    this.spotifyService.getPlaylistTracks(this.playlistId, this.token)
    .subscribe(response => {
      console.log(response);
      this.tracks = response['items'];
      console.log(this.tracks[0]);
    })
  }
  
  dispandRoom(){
    this.spotifyService.deletePlaylist(this.playlistId, this.token)
    .subscribe(response =>{
      console.log(response);
    });

    this.router.navigate(['']);
    
  }

}
