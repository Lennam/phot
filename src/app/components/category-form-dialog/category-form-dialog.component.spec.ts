import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormDialogComponent } from './category-form-dialog.component';

describe('FormDialogComponent', () => {
  let component: CategoryFormDialogComponent;
  let fixture: ComponentFixture<CategoryFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFormDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
