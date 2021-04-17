import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersByQuantityComponent } from './bestsellers-by-quantity.component';

describe('BestsellersByQuantityComponent', () => {
  let component: BestsellersByQuantityComponent;
  let fixture: ComponentFixture<BestsellersByQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellersByQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellersByQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
