// src/app/store/citas.actions.ts
import { createAction, props } from '@ngrx/store';
import { Cita } from '../models/cita.model';

export const loadCitas = createAction('[Citas] Load Citas');
export const loadCitasSuccess = createAction('[Citas] Load Citas Success', props<{ citas: Cita[] }>());
export const loadCitasFailure = createAction('[Citas] Load Citas Failure', props<{ error: string }>());

export const addCita = createAction('[Citas] Add Cita', props<{ cita: Cita }>());
export const addCitaSuccess = createAction('[Citas] Add Cita Success', props<{ cita: Cita }>());
export const addCitaFailure = createAction('[Citas] Add Cita Failure', props<{ error: string }>());
