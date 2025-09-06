import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsHomeComponent } from './components/rxjs-home/rxjs-home.component';
import { RxjsArray2obsComponent } from './components/rxjs-array2obs/rxjs-array2obs.component';
import { RxjsPromise2obsComponent } from './components/rxjs-promise2obs/rxjs-promise2obs.component';
import { RxjsEvent2obsComponent } from './components/rxjs-event2obs/rxjs-event2obs.component';

const routes: Routes = [
  { path: '', redirectTo: 'rxjshome', pathMatch: 'full' },
  { path: 'rxjshome', component: RxjsHomeComponent },
  { path: 'rcjsarray2obs', component: RxjsArray2obsComponent },
  { path: 'rxjspromise2obs', component: RxjsPromise2obsComponent },
  { path: 'rxjsevent2obs', component: RxjsEvent2obsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
