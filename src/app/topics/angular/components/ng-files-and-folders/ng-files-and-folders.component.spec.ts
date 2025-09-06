import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFilesAndFoldersComponent } from './ng-files-and-folders.component';

describe('NgFilesAndFoldersComponent', () => {
  let component: NgFilesAndFoldersComponent;
  let fixture: ComponentFixture<NgFilesAndFoldersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgFilesAndFoldersComponent]
    });
    fixture = TestBed.createComponent(NgFilesAndFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
