import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuMisCitasComponent } from './user-menu-mis-citas.component';

describe('UserMenuMisCitasComponent', () => {
  let component: UserMenuMisCitasComponent;
  let fixture: ComponentFixture<UserMenuMisCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMenuMisCitasComponent]
    });
    fixture = TestBed.createComponent(UserMenuMisCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
