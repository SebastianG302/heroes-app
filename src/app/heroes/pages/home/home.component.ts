import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
