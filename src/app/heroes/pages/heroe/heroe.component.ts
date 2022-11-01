import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe! : Heroe;
  constructor(private route: ActivatedRoute, private heroesService: HeroesService) {
    
  }

  

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.heroesService.getHeroesId(id))
    )
    .subscribe( heroe => this.heroe = heroe);
    

  }

}
