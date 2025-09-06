import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssHomeComponent } from './components/css-home/css-home.component';
import { CssSelectorComponent } from './components/css-selector/css-selector.component';
import { CssSyntaxComponent } from './components/css-syntax/css-syntax.component';
import { CssHowtoComponent } from './components/css-howto/css-howto.component';

const routes: Routes = [
  { path: '', redirectTo: 'csshome', pathMatch: 'full' },
  { path: 'csshome', component: CssHomeComponent },
  { path: 'cssselector', component: CssSelectorComponent },
  { path: 'csssyntax', component: CssSyntaxComponent },
  { path: 'csshowto', component: CssHowtoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssRoutingModule {}
