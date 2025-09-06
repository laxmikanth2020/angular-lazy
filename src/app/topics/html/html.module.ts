import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlHomepageComponent } from './components/html-homepage/html-homepage.component';
import { HtmlElementsComponent } from './components/html-elements/html-elements.component';
import { HtmlAttributesComponent } from './components/html-attributes/html-attributes.component';
import { HtmlHeadingsComponent } from './components/html-headings/html-headings.component';



@NgModule({
  declarations: [
    HtmlHomepageComponent,
    HtmlElementsComponent,
    HtmlAttributesComponent,
    HtmlHeadingsComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ],
  exports : [HtmlHomepageComponent]
})
export class HtmlModule { }
