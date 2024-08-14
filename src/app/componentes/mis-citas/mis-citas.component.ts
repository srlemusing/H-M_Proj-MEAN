// src/app/components/mis-citas/mis-citas.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cita } from '../../models/cita.model';
import { selectAllCitas } from '../../store/citas.selectors';
import * as CitasActions from '../../store/citas.actions';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent implements OnInit {
  citas$: Observable<Cita[]>;

  constructor(private store: Store) {
    this.citas$ = this.store.pipe(select(selectAllCitas));
  }

  ngOnInit(): void {
    // Puedes despachar una acción aquí si necesitas cargar citas desde un servidor
    this.store.dispatch(CitasActions.loadCitas());
  }
}
