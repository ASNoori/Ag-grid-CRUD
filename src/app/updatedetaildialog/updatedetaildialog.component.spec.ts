import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedetaildialogComponent } from './updatedetaildialog.component';

describe('UpdatedetaildialogComponent', () => {
  let component: UpdatedetaildialogComponent;
  let fixture: ComponentFixture<UpdatedetaildialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedetaildialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedetaildialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
