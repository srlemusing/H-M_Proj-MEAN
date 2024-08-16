import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CitasActions from './citas.actions';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CitasEffects {

  agendarCita$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CitasActions.agendarCita),
      mergeMap(action => {
        // Aquí simplemente despachamos la acción de éxito con la cita
        return of(CitasActions.agendarCitaExito({ cita: action.cita }));
      })
    )
  );

  constructor(
    private actions$: Actions
  ) {}
}

