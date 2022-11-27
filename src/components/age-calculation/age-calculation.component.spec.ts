import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalculationComponent } from './age-calculation.component';

describe('AgeCalculationComponent', () => {
  let component: AgeCalculationComponent;
  let fixture: ComponentFixture<AgeCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeCalculationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
