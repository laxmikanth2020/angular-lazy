import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsHomeComponent } from './bs-home.component';

describe('BsHomeComponent', () => {
  let component: BsHomeComponent;
  let fixture: ComponentFixture<BsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsHomeComponent]
    });
    fixture = TestBed.createComponent(BsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
