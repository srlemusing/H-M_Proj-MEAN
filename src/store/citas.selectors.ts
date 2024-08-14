import { createSelector } from '@ngrx/store';
import { CitasState } from './citas.reducer';

export const selectCitasState = (state: any) => state.citas; // Ajusta el selector si es necesario

export const selectCitas = createSelector(
  selectCitasState,
  (state: CitasState) => state.citas
);

export const selectNumeroDeCitas = createSelector(
  selectCitasState,
  (state: CitasState) => state.citas.length
);