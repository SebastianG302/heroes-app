import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor( private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroesId( id: String ){
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`)
  }

}
