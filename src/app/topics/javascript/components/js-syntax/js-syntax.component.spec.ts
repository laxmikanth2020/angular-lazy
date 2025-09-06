import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSyntaxComponent } from './js-syntax.component';

describe('JsSyntaxComponent', () => {
  let component: JsSyntaxComponent;
  let fixture: ComponentFixture<JsSyntaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsSyntaxComponent]
    });
    fixture = TestBed.createComponent(JsSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
