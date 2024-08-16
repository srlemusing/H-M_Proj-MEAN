// src/app/components/agendar-citas/agendar-citas.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCita } from '../../store/citas.actions';
import { Cita } from '../../models/cita.model';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
 styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent implements OnInit {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.citaForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      paciente: ['', Validators.required],
      odontologo: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.citaForm.valid) {
      const newCita: Cita = {
        id: Date.now(), // Usamos un ID temporal; en una aplicación real, deberías generar IDs en el backend.
        fecha: this.citaForm.value.fecha,
        hora: this.citaForm.value.hora,
        paciente: this.citaForm.value.paciente,
        odontologo: this.citaForm.value.odontologo,
        estado: 'confirmada'
      };

      this.store.dispatch(addCita({ cita: newCita }));
      this.citaForm.reset();
    }
  }
}
