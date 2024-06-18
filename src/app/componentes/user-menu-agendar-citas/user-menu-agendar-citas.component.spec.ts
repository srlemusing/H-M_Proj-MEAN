import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuAgendarCitasComponent } from './user-menu-agendar-citas.component';

describe('UserMenuAgendarCitasComponent', () => {
  let component: UserMenuAgendarCitasComponent;
  let fixture: ComponentFixture<UserMenuAgendarCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMenuAgendarCitasComponent]
    });
    fixture = TestBed.createComponent(UserMenuAgendarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
