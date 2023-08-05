import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentExampleComponent } from './child-to-parent-example.component';

describe('ChildToParentExampleComponent', () => {
  let component: ChildToParentExampleComponent;
  let fixture: ComponentFixture<ChildToParentExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildToParentExampleComponent]
    });
    fixture = TestBed.createComponent(ChildToParentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
