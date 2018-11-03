import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private token: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.token = sessionStorage.getItem("access_token");
    console.log("DashBoard");
    console.log(this.token);
  }

}
