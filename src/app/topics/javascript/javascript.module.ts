import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JsHomeComponent } from './components/js-home/js-home.component';
import { JsWheretoComponent } from './components/js-whereto/js-whereto.component';
import { JsOutputComponent } from './components/js-output/js-output.component';
import { JsSyntaxComponent } from './components/js-syntax/js-syntax.component';


@NgModule({
  declarations: [JsHomeComponent, 
                 JsWheretoComponent, 
                 JsOutputComponent, 
                 JsSyntaxComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
