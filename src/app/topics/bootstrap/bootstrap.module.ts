import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BsHomeComponent } from './components/bs-home/bs-home.component';
import { BsContainersComponent } from './components/bs-containers/bs-containers.component';
import { BsGridbasicsComponent } from './components/bs-gridbasics/bs-gridbasics.component';
import { BsTypographyComponent } from './components/bs-typography/bs-typography.component';


@NgModule({
  declarations: [BsHomeComponent, 
                 BsContainersComponent, 
                 BsGridbasicsComponent, 
                 BsTypographyComponent
                ],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
