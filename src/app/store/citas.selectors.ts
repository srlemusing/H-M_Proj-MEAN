// src/app/store/citas.selectors.ts
/* import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CitasState } from './citas.state';

const selectCitasState = createFeatureSelector<CitasState>('citas');

export const selectAllCitas = createSelector(
  selectCitasState,
  (state: CitasState) => state.citas
);

export const selectCitasLoading = createSelector(
  selectCitasState,
  (state: CitasState) => state.loading
);

export const selectCitasError = createSelector(
  selectCitasState,
  (state: CitasState) => state.error
); */


// src/app/store/citas.selectors.ts
import { createSelector } from '@ngrx/store';
import { State } from './citas.reducer';

export const selectCitasState = (state: any) => state.citas;

export const selectAllCitas = createSelector(
  selectCitasState,
  (state: State) => state.citas
);
