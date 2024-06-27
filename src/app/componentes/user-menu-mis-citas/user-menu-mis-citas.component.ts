import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-user-menu-mis-citas',
  templateUrl: './user-menu-mis-citas.component.html',
  styleUrls: ['./user-menu-mis-citas.component.css']
})
export class UserMenuMisCitasComponent implements OnInit{

  ngOnInit(): void {
    this.CargarTodascitas()
  }

    constructor(private peticion:PeticionService){}
    id_ciudad:any[]=[]
    id_depto:any[]=[]
    id_usuarioCliente:any[]=[]
    id_tratamiento:any[]=[]
    fechayhora:any[]=[]
    datos:any[]=[]
    datoscitas:any[]=[]
    Idseleccionado:string=""


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
