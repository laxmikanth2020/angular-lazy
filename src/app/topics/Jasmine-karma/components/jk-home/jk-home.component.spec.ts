import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkHomeComponent } from './jk-home.component';

describe('JkHomeComponent', () => {
  let component: JkHomeComponent;
  let fixture: ComponentFixture<JkHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JkHomeComponent]
    });
    fixture = TestBed.createComponent(JkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
