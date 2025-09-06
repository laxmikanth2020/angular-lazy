import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsHomeComponent } from './components/bs-home/bs-home.component';
import { BsContainersComponent } from './components/bs-containers/bs-containers.component';
import { BsGridbasicsComponent } from './components/bs-gridbasics/bs-gridbasics.component';
import { BsTypographyComponent } from './components/bs-typography/bs-typography.component';

const routes: Routes = [
  { path: '', redirectTo: 'bshome', pathMatch: 'full' },
  { path: 'bshome', component: BsHomeComponent },
  { path: 'bscontainers', component: BsContainersComponent },
  { path: 'bsgridbasics', component: BsGridbasicsComponent },
  { path: 'bstypography', component: BsTypographyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootstrapRoutingModule {}
