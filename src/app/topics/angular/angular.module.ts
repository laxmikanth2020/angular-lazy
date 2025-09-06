import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { NgHomeComponent } from './components/ng-home/ng-home.component';
import { NgFilesAndFoldersComponent } from './components/ng-files-and-folders/ng-files-and-folders.component';
import { NgTypescriptComponent } from './components/ng-typescript/ng-typescript.component';
import { NgComponentComponent } from './components/ng-component/ng-component.component';


@NgModule({
  declarations: [
    NgHomeComponent, 
    NgFilesAndFoldersComponent,
    NgTypescriptComponent, 
    NgComponentComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
