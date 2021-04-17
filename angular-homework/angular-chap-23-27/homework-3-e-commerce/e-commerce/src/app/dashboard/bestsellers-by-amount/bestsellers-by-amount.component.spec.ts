import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersByAmountComponent } from './bestsellers-by-amount.component';

describe('BestsellersByAmountComponent', () => {
  let component: BestsellersByAmountComponent;
  let fixture: ComponentFixture<BestsellersByAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellersByAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellersByAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
