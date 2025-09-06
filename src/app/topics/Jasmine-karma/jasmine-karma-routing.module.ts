import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JkHomeComponent } from './components/jk-home/jk-home.component';
import { JkConfigurationComponent } from './components/jk-configuration/jk-configuration.component';
import { JkUnittestCaseflowComponent } from './components/jk-unittest-caseflow/jk-unittest-caseflow.component';
import { JkRunFlowComponent } from './components/jk-run-flow/jk-run-flow.component';

const routes: Routes = [
  { path: '', redirectTo: 'jkhome', pathMatch: 'full' },
  { path: 'jkhome', component: JkHomeComponent },
  { path: 'jkconfiguration', component: JkConfigurationComponent },
  { path: 'jkunittestcaseflow', component: JkUnittestCaseflowComponent },
  { path: 'jkrununittests', component: JkRunFlowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JasmineKarmaRoutingModule {}
