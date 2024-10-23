import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadNewReportComponent } from './load-new-report.component';

describe('LoadNewReportComponent', () => {
  let component: LoadNewReportComponent;
  let fixture: ComponentFixture<LoadNewReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadNewReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadNewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
