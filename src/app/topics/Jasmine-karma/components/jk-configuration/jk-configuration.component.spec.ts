import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkConfigurationComponent } from './jk-configuration.component';

describe('JkConfigurationComponent', () => {
  let component: JkConfigurationComponent;
  let fixture: ComponentFixture<JkConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JkConfigurationComponent]
    });
    fixture = TestBed.createComponent(JkConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
