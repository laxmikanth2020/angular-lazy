import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxHomeComponent } from './components/ngrx-home/ngrx-home.component';
import { NgrxActionsComponent } from './components/ngrx-actions/ngrx-actions.component';
import { NgrxReducersComponent } from './components/ngrx-reducers/ngrx-reducers.component';
import { NgrxStateComponent } from './components/ngrx-state/ngrx-state.component';


@NgModule({
  declarations: [
    NgrxHomeComponent,
    NgrxActionsComponent,
    NgrxReducersComponent,
    NgrxStateComponent

  ],
  imports: [
    CommonModule,
    NgrxRoutingModule
  ]
})
export class NgrxModule { }
