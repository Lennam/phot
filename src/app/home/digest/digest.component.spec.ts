import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigestComponent } from './digest.component';

describe('DigestComponent', () => {
  let component: DigestComponent;
  let fixture: ComponentFixture<DigestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
