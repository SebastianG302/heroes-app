import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //Trae el tipo "Routes"
import { AuthGuard } from './auth/guards/auth.guard';

import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
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
