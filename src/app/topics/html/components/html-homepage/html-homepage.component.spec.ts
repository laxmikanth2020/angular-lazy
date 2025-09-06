import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHomepageComponent } from './html-homepage.component';

describe('HtmlHomepageComponent', () => {
  let component: HtmlHomepageComponent;
  let fixture: ComponentFixture<HtmlHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlHomepageComponent]
    });
    fixture = TestBed.createComponent(HtmlHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
