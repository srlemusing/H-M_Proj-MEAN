// src/app/store/citas.reducer.ts
import { createReducer, on, Action } from '@ngrx/store';
/* import { CitasState, initialCitasState } from './citas.state'; */
import * as CitasActions from './citas.actions';
import { Cita } from '../models/cita.model';

/* export const citasReducer = createReducer(
  initialCitasState,
  on(CitasActions.loadCitas, state => ({ ...state, loading: true })),
  on(CitasActions.loadCitasSuccess, (state, { citas }) => ({ ...state, citas, loading: false })),
  on(CitasActions.loadCitasFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(CitasActions.addCita, state => ({ ...state, loading: true })),
  on(CitasActions.addCitaSuccess, (state, { cita }) => ({ ...state, citas: [...state.citas, cita], loading: false })),
  on(CitasActions.addCitaFailure, (state, { error }) => ({ ...state, error, loading: false }))
); */

// src/app/store/citas.reducer.ts


// src/app/store/citas.reducer.ts

export interface State {
  citas: Cita[];
}

export const initialState: State = {
  citas: []
};

const _citasReducer = createReducer(
  initialState,
  on(CitasActions.addCita, (state, { cita }) => ({
    ...state,
    citas: [...state.citas, cita]
  })),
  on(CitasActions.loadCitasSuccess, (state, { citas }) => ({
    ...state,
    citas
  })),
  on(CitasActions.loadCitasFailure, (state) => ({
    ...state
  }))
);

export function citasReducer(state: State | undefined, action: Action) {
  return _citasReducer(state, action);
}

