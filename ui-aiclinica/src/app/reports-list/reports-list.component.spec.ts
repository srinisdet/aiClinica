import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsListComponent } from './reports-list.component';

describe('ReportsListComponent', () => {
  let component: ReportsListComponent;
  let fixture: ComponentFixture<ReportsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
