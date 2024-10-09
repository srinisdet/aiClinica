import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientVerticalBarComponent } from './gradient-vertical-bar.component';

describe('GradientVerticalBarComponent', () => {
  let component: GradientVerticalBarComponent;
  let fixture: ComponentFixture<GradientVerticalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradientVerticalBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientVerticalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
