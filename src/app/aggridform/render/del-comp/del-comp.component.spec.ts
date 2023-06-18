import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelCompComponent } from './del-comp.component';

describe('DelCompComponent', () => {
  let component: DelCompComponent;
  let fixture: ComponentFixture<DelCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
