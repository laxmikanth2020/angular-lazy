import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssHomeComponent } from './components/css-home/css-home.component';
import { CssSyntaxComponent } from './components/css-syntax/css-syntax.component';
import { CssSelectorComponent } from './components/css-selector/css-selector.component';
import { CssHowtoComponent } from './components/css-howto/css-howto.component';


@NgModule({
  declarations: [
    CssHomeComponent,
    CssSyntaxComponent,
    CssSelectorComponent,
    CssHowtoComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule
  ]
})
export class CssModule { }
