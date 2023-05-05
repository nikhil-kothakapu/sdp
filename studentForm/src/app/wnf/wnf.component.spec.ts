import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnfComponent } from './wnf.component';

describe('WnfComponent', () => {
  let component: WnfComponent;
  let fixture: ComponentFixture<WnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WnfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
