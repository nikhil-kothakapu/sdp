import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudComponent } from './tud.component';

describe('TudComponent', () => {
  let component: TudComponent;
  let fixture: ComponentFixture<TudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
