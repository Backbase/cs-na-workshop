import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeGoalsViewComponent } from './life-goals-view.component';

describe('LifeGoalsViewComponent', () => {
  let component: LifeGoalsViewComponent;
  let fixture: ComponentFixture<LifeGoalsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeGoalsViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeGoalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
