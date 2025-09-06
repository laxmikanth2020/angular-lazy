import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEvent2obsComponent } from './rxjs-event2obs.component';

describe('RxjsEvent2obsComponent', () => {
  let component: RxjsEvent2obsComponent;
  let fixture: ComponentFixture<RxjsEvent2obsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsEvent2obsComponent]
    });
    fixture = TestBed.createComponent(RxjsEvent2obsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
