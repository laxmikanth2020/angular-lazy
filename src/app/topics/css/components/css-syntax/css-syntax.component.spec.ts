import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSyntaxComponent } from './css-syntax.component';

describe('CssSyntaxComponent', () => {
  let component: CssSyntaxComponent;
  let fixture: ComponentFixture<CssSyntaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssSyntaxComponent]
    });
    fixture = TestBed.createComponent(CssSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
