import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTypescriptComponent } from './ng-typescript.component';

describe('NgTypescriptComponent', () => {
  let component: NgTypescriptComponent;
  let fixture: ComponentFixture<NgTypescriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTypescriptComponent]
    });
    fixture = TestBed.createComponent(NgTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
