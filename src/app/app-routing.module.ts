import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //Trae el tipo "Routes"

import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'pageNotFound',
    component: ErrorPageComponent 
  },
  {
    path: '**',
    redirectTo: 'pageNotFound'
  }
]
//declarations and commonModule are not necesary in a routing module


@NgModule({
  imports: [
    RouterModule.forRoot( routes )  //Root porque son las rutas pricipales
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
