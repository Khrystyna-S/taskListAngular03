import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child003Component } from './child003.component';

describe('Child003Component', () => {
  let component: Child003Component;
  let fixture: ComponentFixture<Child003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
