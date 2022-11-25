import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }
 
  constructor(private http: HttpClient) { }

  verificarAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('id')) {
      return of(false);
    }
    return of(true);
  }

  login(){
    return this.http.get<Auth>(`${ this.baseUrl}/usuarios/1`)
    .pipe(
      tap( resp => this._auth = resp),
      tap( auth => localStorage.setItem('id', auth.id))
    );
  }
}
