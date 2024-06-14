import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarTratamientosComponent } from './administrar-tratamientos.component';

describe('AdministrarTratamientosComponent', () => {
  let component: AdministrarTratamientosComponent;
  let fixture: ComponentFixture<AdministrarTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrarTratamientosComponent]
    });
    fixture = TestBed.createComponent(AdministrarTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
