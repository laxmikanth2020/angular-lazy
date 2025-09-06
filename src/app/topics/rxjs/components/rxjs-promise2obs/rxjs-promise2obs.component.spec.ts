import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPromise2obsComponent } from './rxjs-promise2obs.component';

describe('RxjsPromise2obsComponent', () => {
  let component: RxjsPromise2obsComponent;
  let fixture: ComponentFixture<RxjsPromise2obsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsPromise2obsComponent]
    });
    fixture = TestBed.createComponent(RxjsPromise2obsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
