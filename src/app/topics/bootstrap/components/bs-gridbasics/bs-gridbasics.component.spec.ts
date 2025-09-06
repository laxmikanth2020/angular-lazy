import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsGridbasicsComponent } from './bs-gridbasics.component';

describe('BsGridbasicsComponent', () => {
  let component: BsGridbasicsComponent;
  let fixture: ComponentFixture<BsGridbasicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BsGridbasicsComponent]
    });
    fixture = TestBed.createComponent(BsGridbasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
