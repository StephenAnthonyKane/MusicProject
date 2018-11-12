import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private response_type = 'token';
  private clientId = '10ce89cd71244a4b866a20bcf768a81e';
  // private redirect_uri = 'http://localhost:4200/callback';
  private redirect_uri = 'http://192.168.0.16:4200/callback';
  private scope = 'user-read-private user-read-email playlist-read-private ' +
                  'user-read-currently-playing playlist-read-collaborative ' +
                  'playlist-modify-private playlist-read-private playlist-modify-public';
  private show_dialog = 'true';

  spotifyLogin() {
    window.location.href = 'https://accounts.spotify.com/authorize?response_type=' + this.response_type +
                           '&client_id=' + this.clientId +
                           '&redirect_uri=' + this.redirect_uri +
                           '&scope=' + this.scope +
                           '&show_dialog=' + this.show_dialog;
  }
}
