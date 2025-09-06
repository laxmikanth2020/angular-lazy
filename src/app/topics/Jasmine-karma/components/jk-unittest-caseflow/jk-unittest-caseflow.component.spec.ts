import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkUnittestCaseflowComponent } from './jk-unittest-caseflow.component';

describe('JkUnittestCaseflowComponent', () => {
  let component: JkUnittestCaseflowComponent;
  let fixture: ComponentFixture<JkUnittestCaseflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JkUnittestCaseflowComponent]
    });
    fixture = TestBed.createComponent(JkUnittestCaseflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
