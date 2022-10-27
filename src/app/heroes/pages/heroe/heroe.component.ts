import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {


  constructor(private route: ActivatedRoute) {
    
  }

  

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    
    
  }

}
