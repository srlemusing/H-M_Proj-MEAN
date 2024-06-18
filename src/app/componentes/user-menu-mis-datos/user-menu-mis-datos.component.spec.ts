import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuMisDatosComponent } from './user-menu-mis-datos.component';

describe('UserMenuMisDatosComponent', () => {
  let component: UserMenuMisDatosComponent;
  let fixture: ComponentFixture<UserMenuMisDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMenuMisDatosComponent]
    });
    fixture = TestBed.createComponent(UserMenuMisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
