import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsWheretoComponent } from './js-whereto.component';

describe('JsWheretoComponent', () => {
  let component: JsWheretoComponent;
  let fixture: ComponentFixture<JsWheretoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsWheretoComponent]
    });
    fixture = TestBed.createComponent(JsWheretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
