import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressGuageComponent } from './progress-guage.component';

describe('ProgressGuageComponent', () => {
  let component: ProgressGuageComponent;
  let fixture: ComponentFixture<ProgressGuageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressGuageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
