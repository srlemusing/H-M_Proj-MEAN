import { createAction, props } from '@ngrx/store';
import { CitaRes } from './cita.model'; 

export const agendarCita = createAction(
  '[Citas] Agendar Cita',
  props<{ cita: CitaRes }>()
);

export const agendarCitaExito = createAction(
  '[Citas] Agendar Cita Exito',
  props<{ cita: CitaRes }>()
);

export const agendarCitaError = createAction(
  '[Citas] Agendar Cita Error',
  props<{ error: any }>()
);

export const cargarCitas = createAction(
  '[Citas] Cargar Citas'
);

export const cargarCitasExito = createAction(
  '[Citas] Cargar Citas Exito',
  props<{ citas: CitaRes[] }>()
);

export const cargarCitasError = createAction(
  '[Citas] Cargar Citas Error',
  props<{ error: any }>()
);

