import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlHomepageComponent } from './components/html-homepage/html-homepage.component';
import { HtmlElementsComponent } from './components/html-elements/html-elements.component';
import { HtmlAttributesComponent } from './components/html-attributes/html-attributes.component';
import { HtmlHeadingsComponent } from './components/html-headings/html-headings.component';

const routes: Routes = [
  { path: '', redirectTo: 'htmlhome', pathMatch: 'full' },
  { path: 'htmlhome', component: HtmlHomepageComponent },
  { path: 'htmlelements', component: HtmlElementsComponent },
  { path: 'htmlattributes', component: HtmlAttributesComponent },
  { path: 'htmlheadings', component: HtmlHeadingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlRoutingModule {}
