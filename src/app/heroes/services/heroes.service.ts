import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor( private http: HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>('https://my-json-server.typicode.com/SebastianG302/db-heroesApp/heroes');
  }


}
