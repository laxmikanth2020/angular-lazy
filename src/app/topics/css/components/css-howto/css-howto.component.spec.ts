import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssHowtoComponent } from './css-howto.component';

describe('CssHowtoComponent', () => {
  let component: CssHowtoComponent;
  let fixture: ComponentFixture<CssHowtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssHowtoComponent]
    });
    fixture = TestBed.createComponent(CssHowtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
