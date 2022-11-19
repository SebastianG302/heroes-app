import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  selectedHeroe!: Heroe;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroesService.getSuggestions( this.termino )
      .subscribe (heroes => this.heroes = heroes)
  }

  selectedOption( event: MatAutocompleteSelectedEvent ){
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroesId( heroe.id! )
      .subscribe(heroe => this.selectedHeroe = heroe)
  }
}
