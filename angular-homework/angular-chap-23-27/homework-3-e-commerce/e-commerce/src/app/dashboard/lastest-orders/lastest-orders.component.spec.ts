import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestOrdersComponent } from './lastest-orders.component';

describe('LastestOrdersComponent', () => {
  let component: LastestOrdersComponent;
  let fixture: ComponentFixture<LastestOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastestOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
