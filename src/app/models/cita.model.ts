// src/app/models/cita.model.ts
export interface Cita {
  id: number;
  fecha: string;
  hora: string;
  paciente: string;
  odontologo: string;
  estado: 'confirmada' | 'pendiente' | 'cancelada';
}
