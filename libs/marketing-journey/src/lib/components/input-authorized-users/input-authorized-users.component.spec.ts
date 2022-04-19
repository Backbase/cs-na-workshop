import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthorizedUsersComponent } from './input-authorized-users.component';

describe('InputAuthorizedUsersComponent', () => {
  let component: InputAuthorizedUsersComponent;
  let fixture: ComponentFixture<InputAuthorizedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuthorizedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuthorizedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
