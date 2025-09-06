import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsHomeComponent } from './components/rxjs-home/rxjs-home.component';
import { RxjsArray2obsComponent } from './components/rxjs-array2obs/rxjs-array2obs.component';
import { RxjsPromise2obsComponent } from './components/rxjs-promise2obs/rxjs-promise2obs.component';
import { RxjsEvent2obsComponent } from './components/rxjs-event2obs/rxjs-event2obs.component';


@NgModule({
  declarations: [
    RxjsHomeComponent,
    RxjsArray2obsComponent,
    RxjsPromise2obsComponent,
    RxjsEvent2obsComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
