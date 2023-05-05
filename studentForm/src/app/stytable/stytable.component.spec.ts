import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StytableComponent } from './stytable.component';

describe('StytableComponent', () => {
  let component: StytableComponent;
  let fixture: ComponentFixture<StytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StytableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
