import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

import { Store, select } from '@ngrx/store';

import { cargarCitas } from '../../../store/citas.actions';

import { CitaRes, RespuestaCitas } from '../../../store/cita.model';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-user-menu-mis-citas',
  templateUrl: './user-menu-mis-citas.component.html',
  styleUrls: ['./user-menu-mis-citas.component.css']
})
export class UserMenuMisCitasComponent implements OnInit{

  citas: CitaRes[] = [];
  cargando = false;
  error: any;

  ngOnInit(): void {
    this.CargarTodascitas()
  }

    constructor(private peticion:PeticionService,private store: Store){}
    id_ciudad:String = ""
    id_depto:String = ""
    id_usuarioCliente:any[]=[]
    id_tratamiento:any[]=[]
    fecha:String = ""
    hora:String = ""
    datos:any[]=[]
    datoscitas:any[]=[]
    Idseleccionado:string=""
    estado:Number = 1
    fechayhora:String=""


  CargarTodascitas(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/listUsuario",
      payload:{
      }
    }
    this.peticion.Get(post.Host+post.path).then(
      (res:any) => {
        console.log(res)
        this.datos=res.data
      }
  )
  }

//cargar citas con un observable no se deberia llamar api.



  cargarTodasCitas2() {
    this.cargando = true;
    const url = `${this.peticion.urlHost}/citas/listUsuario`;

    this.peticion.Get2(url).then(
      (res: RespuestaCitas) => {
        if (res.state) {
          this.datos = res.data;
        } else {
          this.error = 'No se pudieron cargar las citas.';
        }
      }
    ).catch(error => {
      this.error = 'Error al cargar las citas.';
    }).finally(() => {
      this.cargando = false;
    });
  }















  AbrirModal(){
    $('#modalnuevo').modal('show')
  }
  Guardar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/save",
      payload:{
        id_ciudad:this.id_ciudad,
        id_depto:this.id_depto,
        id_usuarioCliente:this.id_usuarioCliente,
        id_tratamiento:this.id_tratamiento
      }
    }
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        if(res.state==true){
          Swal.fire({
            icon: "success",
            title: "Que Bien!",
            text: res.mensaje,
          });
          $('#modalnuevo').modal('hide')
          this.CargarTodascitas()
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Ouch!",
            text: res.mensaje,
          });
        }
      }
    )



  }
}
