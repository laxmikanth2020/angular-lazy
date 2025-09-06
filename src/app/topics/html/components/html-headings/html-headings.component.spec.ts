import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHeadingsComponent } from './html-headings.component';

describe('HtmlHeadingsComponent', () => {
  let component: HtmlHeadingsComponent;
  let fixture: ComponentFixture<HtmlHeadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlHeadingsComponent]
    });
    fixture = TestBed.createComponent(HtmlHeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
