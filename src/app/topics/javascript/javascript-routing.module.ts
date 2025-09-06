import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsHomeComponent } from './components/js-home/js-home.component';
import { JsSyntaxComponent } from './components/js-syntax/js-syntax.component';
import { JsWheretoComponent } from './components/js-whereto/js-whereto.component';
import { JsOutputComponent } from './components/js-output/js-output.component';

const routes: Routes = [
  { path: '', redirectTo: 'jshome', pathMatch: 'full' },
  { path: 'jshome', component: JsHomeComponent },
  { path: 'jssyntax', component: JsSyntaxComponent },
  { path: 'jswhereto', component: JsWheretoComponent },
  { path: 'jsoutput', component: JsOutputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavascriptRoutingModule {}
