import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkRunFlowComponent } from './jk-run-flow.component';

describe('JkRunFlowComponent', () => {
  let component: JkRunFlowComponent;
  let fixture: ComponentFixture<JkRunFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JkRunFlowComponent]
    });
    fixture = TestBed.createComponent(JkRunFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
