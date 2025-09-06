import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'html', pathMatch: 'full' },
  {
    path: 'html',
    loadChildren: () =>
      import('./topics/html/html.module').then((mod) => mod.HtmlModule),
  },
  {
    path: 'css',
    loadChildren: () =>
      import('./topics/css/css.module').then((mod) => mod.CssModule),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('./topics/javascript/javascript.module').then(
        (mod) => mod.JavascriptModule
      ),
  },
  {
    path: 'bootstrap',
    loadChildren: () =>
      import('./topics/bootstrap/bootstrap.module').then(
        (mod) => mod.BootstrapModule
      ),
  },

  {
    path: 'angular',
    loadChildren: () =>
      import('./topics/angular/angular.module').then(
        (mod) => mod.AngularModule
      ),
  },

  {
    path: 'rxjs',
    loadChildren: () =>
      import('./topics/rxjs/rxjs.module').then((mod) => mod.RxjsModule),
  },

  {
    path: 'ngrx',
    loadChildren: () =>
      import('./topics/ngrx/ngrx.module').then((mod) => mod.NgrxModule),
  },

  {
    path: 'jasminekarma',
    loadChildren: () =>
      import('./topics/Jasmine-karma/jasmine-karma.module').then(
        (mod) => mod.JasmineKarmaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
