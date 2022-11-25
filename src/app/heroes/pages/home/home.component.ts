import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .sidenav-container{
    max-width: 2000px;
    margin: 0 auto;
    width: 100%;
    display:flex
  }
    .container{
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  get auth(){
    return this.authService.auth
  }

  logout(){
    this.router.navigate(['./auth/login'])
  }

  ngOnInit(): void {
    
  }

}
