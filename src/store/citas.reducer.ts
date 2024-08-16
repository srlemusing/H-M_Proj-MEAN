import { createReducer, on } from '@ngrx/store';
import * as CitasActions from './citas.actions';
import { CitaRes } from './cita.model';

export interface CitasState {
  citas: CitaRes[];
  cargando: boolean;
  error: any;
}

export const initialState: CitasState = {
  citas: [],
  cargando: false,
  error: null
};

export const citasReducer = createReducer(
  initialState,
  on(CitasActions.agendarCita, state => ({ ...state, cargando: true })),
  on(CitasActions.agendarCitaExito, (state, { cita }) => ({
    ...state,
    cargando: false,
    citas: [...state.citas, cita] // Añadir la nueva cita a la lista existente
  })),
  on(CitasActions.agendarCitaError, (state, { error }) => ({
    ...state,
    cargando: false,
    error
  }))
);