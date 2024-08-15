import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePost,RespuestaCitas } from '../../store/cita.model';

declare var Swal:any

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http: HttpClient) { }

  urlHost:string="http://3.144.169.237:3000"

  Post(url:string,data:{}){

    let promise = new Promise((resolve,reject) => {

      this.http.post(url,data).toPromise().then(
        (res:any) => {
          if(res.permisos==true){
            Swal.fire({
              title:"Ouch!",
              text:res.mensaje,
              icon:"error"
            });
          }
          resolve(res)
        }
      ).catch((error) => {
        reject(error)
      })
    })
    return promise
  }

  Post2(path:string,data:{}){

    const url = `${this.urlHost}${path}`;

    let promise = new Promise<ResponsePost>((resolve,reject) => {

      this.http.post<ResponsePost>(url,data).toPromise().then(
        (res:any) => {
          if(res.permisos==true){
            Swal.fire({
              title:"Ouch!",
              text:res.mensaje,
              icon:"error"
            });
          }
          resolve(res)
        }
      ).catch((error) => {
        reject(error)
      })
    })
    return promise
  }

  Put(url:string,data:{}){

    let promise = new Promise((resolve,reject) => {

      this.http.put(url,data).toPromise().then(
        (res:any) => {
          resolve(res)
        }
      ).catch((error) => {
        reject(error)
      })
    })
    return promise
  }

  Delete(url:string,data:{}){

    let promise = new Promise((resolve,reject) => {

      this.http.delete(url,data).toPromise().then(
        (res:any) => {
          resolve(res)
        }
      ).catch((error) => {
        reject(error)
      })

  })

  return promise

  }

  Get(url:string){

    let promise = new Promise((resolve,reject) => {

      this.http.get(url).toPromise().then(
        (res:any) => {
          resolve(res)
        }
      ).catch((error) => {
        reject(error)
      })

  })

  

  return promise

  }

  Get2(url:string){

    let promise = new Promise<RespuestaCitas>((resolve,reject) => {

      this.http.get<RespuestaCitas>(url).toPromise().then(
        (res:any) => {
          resolve(res)
        }
      ).catch((error) => {
        reject(error)
      })

  })

  

  return promise

  }

}
