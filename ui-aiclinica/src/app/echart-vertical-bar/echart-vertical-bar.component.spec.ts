import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartVerticalBarComponent } from './echart-vertical-bar.component';

describe('EchartVerticalBarComponent', () => {
  let component: EchartVerticalBarComponent;
  let fixture: ComponentFixture<EchartVerticalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EchartVerticalBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartVerticalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
