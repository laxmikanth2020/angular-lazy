import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxStateComponent } from './ngrx-state.component';

describe('NgrxStateComponent', () => {
  let component: NgrxStateComponent;
  let fixture: ComponentFixture<NgrxStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxStateComponent]
    });
    fixture = TestBed.createComponent(NgrxStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
