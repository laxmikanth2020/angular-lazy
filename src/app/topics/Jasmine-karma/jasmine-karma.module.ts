import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JasmineKarmaRoutingModule } from './jasmine-karma-routing.module';
import { JkHomeComponent } from './components/jk-home/jk-home.component';
import { JkUnittestCaseflowComponent } from './components/jk-unittest-caseflow/jk-unittest-caseflow.component';
import { JkRunFlowComponent } from './components/jk-run-flow/jk-run-flow.component';
import { JkConfigurationComponent } from './components/jk-configuration/jk-configuration.component';


@NgModule({
  declarations: [
    JkHomeComponent,
    JkUnittestCaseflowComponent,
    JkRunFlowComponent,
    JkConfigurationComponent
  ],
  imports: [
    CommonModule,
    JasmineKarmaRoutingModule
  ]
})
export class JasmineKarmaModule { }
