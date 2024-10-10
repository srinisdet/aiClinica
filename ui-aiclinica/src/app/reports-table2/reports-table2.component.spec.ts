import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTable2Component } from './reports-table2.component';

describe('ReportsTable2Component', () => {
  let component: ReportsTable2Component;
  let fixture: ComponentFixture<ReportsTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsTable2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
