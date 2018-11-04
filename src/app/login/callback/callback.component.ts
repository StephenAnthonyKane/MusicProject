import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  access_token: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(frag => {
      if (this.route.snapshot.fragment) {
        if (sessionStorage.getItem('access_token')) {
          sessionStorage.removeItem('access_token');
        }
        this.access_token = frag.substring(13, frag.search('&token_type'));
        sessionStorage.setItem('access_token', this.access_token);
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
