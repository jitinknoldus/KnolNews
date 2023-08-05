import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgriddingComponent } from './cardgridding.component';

describe('CardgriddingComponent', () => {
  let component: CardgriddingComponent;
  let fixture: ComponentFixture<CardgriddingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardgriddingComponent]
    });
    fixture = TestBed.createComponent(CardgriddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
