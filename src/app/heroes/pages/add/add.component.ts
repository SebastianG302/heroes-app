import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from "rxjs/operators";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5%;
    }
  `
  ]
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private heroeService: HeroesService,
              private activateRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {

    if(!this.route.url.includes('edit')){
      return
    }

    this.activateRoute.params
    .pipe(switchMap(({id}) => this.heroeService.getHeroesId(id)))
    .subscribe(heroe => this.heroe = heroe);
  }



  save(){
    if(this.heroe.superhero.trim().length === 0){
      return
    }

    if (this.heroe.id){
      this.heroeService.actualizarHeroe(this.heroe)
      .subscribe(heroe => console.log('actualizado', heroe))
    } else {

      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        this.route.navigate(['/heroes/edit', heroe.id ])
      })
    }
  }

  borrar(){
    this.heroeService.borrarHeroe(this.heroe.id!)
    .subscribe( resp => {
      this.route.navigate(['/heroes'])
    })

    
  }

}
