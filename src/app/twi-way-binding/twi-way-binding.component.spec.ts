import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiWayBindingComponent } from './twi-way-binding.component';

describe('TwiWayBindingComponent', () => {
  let component: TwiWayBindingComponent;
  let fixture: ComponentFixture<TwiWayBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwiWayBindingComponent]
    });
    fixture = TestBed.createComponent(TwiWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
