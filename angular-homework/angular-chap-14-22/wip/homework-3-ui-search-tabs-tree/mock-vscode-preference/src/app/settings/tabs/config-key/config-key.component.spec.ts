import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigKeyComponent } from './config-key.component';

describe('ConfigKeyComponent', () => {
  let component: ConfigKeyComponent;
  let fixture: ComponentFixture<ConfigKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
