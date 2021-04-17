import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSearchKeywordsComponent } from './popular-search-keywords.component';

describe('PopularSearchKeywordsComponent', () => {
  let component: PopularSearchKeywordsComponent;
  let fixture: ComponentFixture<PopularSearchKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSearchKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSearchKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
