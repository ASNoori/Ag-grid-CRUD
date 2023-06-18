import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridformComponent } from './aggridform.component';

describe('AggridformComponent', () => {
  let component: AggridformComponent;
  let fixture: ComponentFixture<AggridformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
