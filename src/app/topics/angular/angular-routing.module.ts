import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlHomepageComponent } from '../html/components/html-homepage/html-homepage.component';
import { NgHomeComponent } from './components/ng-home/ng-home.component';
import { NgFilesAndFoldersComponent } from './components/ng-files-and-folders/ng-files-and-folders.component';
import { NgTypescriptComponent } from './components/ng-typescript/ng-typescript.component';
import { NgComponentComponent } from './components/ng-component/ng-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'nghome', pathMatch: 'full' },
  { path: 'nghome', component: NgHomeComponent },
  { path: 'ngfilesandfolderstructure', component: NgFilesAndFoldersComponent },
  { path: 'ngtypescript', component: NgTypescriptComponent },
  { path: 'ngcomponent', component: NgComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
