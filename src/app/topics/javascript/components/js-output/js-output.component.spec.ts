import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsOutputComponent } from './js-output.component';

describe('JsOutputComponent', () => {
  let component: JsOutputComponent;
  let fixture: ComponentFixture<JsOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsOutputComponent]
    });
    fixture = TestBed.createComponent(JsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
