import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxHomeComponent } from './ngrx-home.component';

describe('NgrxHomeComponent', () => {
  let component: NgrxHomeComponent;
  let fixture: ComponentFixture<NgrxHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxHomeComponent]
    });
    fixture = TestBed.createComponent(NgrxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
