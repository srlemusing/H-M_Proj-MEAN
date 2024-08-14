// src/app/store/citas.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CitasService } from '../services/citas.service'; // Asegúrate de tener un servicio para manejar API
import * as CitasActions from './citas.actions';

@Injectable()
export class CitasEffects {
  constructor(
    private actions$: Actions,
    private citasService: CitasService
  ) {}

  addCita$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CitasActions.addCita),
      mergeMap(action =>
        this.citasService.addCita(action.cita).pipe(
          map(cita => CitasActions.addCitaSuccess({ cita })),
          catchError(error => of(CitasActions.addCitaFailure({ error })))
        )
      )
    )
  );
}


