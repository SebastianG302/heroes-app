import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]

})
export class MaterialModule { }
