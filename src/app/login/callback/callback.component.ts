import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  private accessToken: string;
  private playlistName = '';
  private possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private userId: string;

  constructor(private route: ActivatedRoute, private router: Router, private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (this.route.snapshot.fragment) {
        if (sessionStorage.getItem('accessToken')) {
          sessionStorage.removeItem('accessToken');
        }
        this.accessToken = frag.substring(13, frag.search('&token_type'));
        sessionStorage.setItem('accessToken', this.accessToken);
        this.creatPlaylist();
      } else {
        this.router.navigate(['']);
      }
    });
  }

  creatPlaylist() {

    for (let i = 0; i <= 3; i++) {
      this.playlistName += this.possibleChars.charAt(Math.floor(Math.random() * this.possibleChars.length));
    }

    this.spotifyService.getUserId(this.accessToken)
    .subscribe(response => {

      this.spotifyService.createPlaylist(this.playlistName, this.accessToken, response['id'])

      .subscribe(result => {

        if (sessionStorage.getItem('roomCode') || sessionStorage.getItem('playlistId')) {
          sessionStorage.removeItem('roomCode');
          sessionStorage.removeItem('playlistId');
        }
        sessionStorage.setItem('roomCode', this.playlistName);
        sessionStorage.setItem('playlistId', result['id']);
        this.router.navigate(['/dashboard']);
      });
    });

  }
}
