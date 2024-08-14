// // src/app/services/citas.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Cita } from '../models/cita.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CitasService {
//   private apiUrl = 'http://localhost:4200/mis-citas'; // Reemplaza con tu URL

//   constructor(private http: HttpClient) {}

//   addCita(cita: Cita): Observable<Cita> {
//     return this.http.post<Cita>(this.apiUrl, cita);
//   }

// }

// src/app/services/citas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = 'http://localhost:4200/mis-citas'; // Reemplaza con tu URL

  constructor(private http: HttpClient) {}

  addCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.apiUrl, cita);
  }

}

