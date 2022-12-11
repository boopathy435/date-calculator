import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDifferenceComponent } from './count-difference.component';

describe('CountDifferenceComponent', () => {
  let component: CountDifferenceComponent;
  let fixture: ComponentFixture<CountDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDifferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
