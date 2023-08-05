import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardComponentComponent } from './news-card-component.component';

describe('NewsCardComponentComponent', () => {
  let component: NewsCardComponentComponent;
  let fixture: ComponentFixture<NewsCardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCardComponentComponent]
    });
    fixture = TestBed.createComponent(NewsCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
