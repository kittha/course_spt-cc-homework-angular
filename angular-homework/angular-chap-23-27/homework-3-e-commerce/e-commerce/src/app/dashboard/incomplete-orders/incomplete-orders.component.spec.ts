import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteOrdersComponent } from './incomplete-orders.component';

describe('IncompleteOrdersComponent', () => {
  let component: IncompleteOrdersComponent;
  let fixture: ComponentFixture<IncompleteOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncompleteOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleteOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
