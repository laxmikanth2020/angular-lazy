import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsArray2obsComponent } from './rxjs-array2obs.component';

describe('RxjsArray2obsComponent', () => {
  let component: RxjsArray2obsComponent;
  let fixture: ComponentFixture<RxjsArray2obsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsArray2obsComponent]
    });
    fixture = TestBed.createComponent(RxjsArray2obsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
