import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  private response_type: string = "token";
  private clientId: string = "10ce89cd71244a4b866a20bcf768a81e";
  private redirect_uri: string = "http://localhost:4200/callback";
  private scope: string = "user-read-private user-read-email";
  private show_dialog: string = "false"

  spotifyLogin(){
    window.location.href = "https://accounts.spotify.com/authorize?response_type="+this.response_type+
                           "&client_id="+this.clientId+
                           "&redirect_uri="+this.redirect_uri+
                           "&scope="+this.scope+
                           "&show_dialog="+this.show_dialog;
  }
}
