import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationWarnDialogComponent } from './operation-warn-dialog.component';

describe('OperationWarnDialogComponent', () => {
  let component: OperationWarnDialogComponent;
  let fixture: ComponentFixture<OperationWarnDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationWarnDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationWarnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
