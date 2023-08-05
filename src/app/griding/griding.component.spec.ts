import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridingComponent } from './griding.component';

describe('GridingComponent', () => {
  let component: GridingComponent;
  let fixture: ComponentFixture<GridingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridingComponent]
    });
    fixture = TestBed.createComponent(GridingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
