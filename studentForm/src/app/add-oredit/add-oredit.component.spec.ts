import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOREditComponent } from './add-oredit.component';

describe('AddOREditComponent', () => {
  let component: AddOREditComponent;
  let fixture: ComponentFixture<AddOREditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOREditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOREditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
