import { Component, OnInit } from '@angular/core';
import { StartupService } from './core/services/startup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BookingApp';

  constructor(
    private startupService: StartupService,
    private router: Router,
  ) {
    this.getTypeUser();
  }

  ngOnInit() {

  }

  getTypeUser() {
    this.startupService.getUserType().subscribe(res => {
      if (res.access_token1) {
        // route to the home page as public user
        console.log('You are Public User');
        this.router.navigate(['/']);
      } else {
        // route to the login page as con user
        console.log('You are Cons User');
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
