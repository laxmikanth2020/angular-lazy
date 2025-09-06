import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsTypographyComponent } from './bs-typography.component';

describe('BsTypographyComponent', () => {
  let component: BsTypographyComponent;
  let fixture: ComponentFixture<BsTypographyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsTypographyComponent]
    });
    fixture = TestBed.createComponent(BsTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
