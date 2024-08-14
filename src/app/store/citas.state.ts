// src/app/store/citas.state.ts
import { Cita } from '../models/cita.model';

export interface CitasState {
  citas: Cita[];
  loading: boolean;
  error: string | null;
}

export const initialCitasState: CitasState = {
  citas: [],
  loading: false,
  error: null,
};
