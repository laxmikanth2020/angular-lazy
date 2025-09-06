import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxHomeComponent } from './components/ngrx-home/ngrx-home.component';
import { NgrxActionsComponent } from './components/ngrx-actions/ngrx-actions.component';
import { NgrxReducersComponent } from './components/ngrx-reducers/ngrx-reducers.component';
import { NgrxStateComponent } from './components/ngrx-state/ngrx-state.component';

const routes: Routes = [
  { path: '', redirectTo: 'ngrxhome', pathMatch: 'full' },
  { path: 'ngrxhome', component: NgrxHomeComponent },
  { path: 'ngrxactions', component: NgrxActionsComponent },
  { path: 'ngrxreducers', component: NgrxReducersComponent },
  { path: 'ngrxstate', component: NgrxStateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxRoutingModule {}
