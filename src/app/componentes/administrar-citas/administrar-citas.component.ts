import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-administrar-citas',
  templateUrl: './administrar-citas.component.html',
  styleUrls: ['./administrar-citas.component.css']
})
export class AdministrarCitasComponent implements OnInit{

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

/**
 * funcion para cargar datos de las citas
 */
  CargarTodascitas(){

    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/list",
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

    this.id_ciudad = []
    this.id_depto = []
    this.id_usuarioCliente = []
    this.id_tratamiento = []
    this.fechayhora = []
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
  /**
   * funcion para cargar un solo registro
   * @param id este es el identificador del producto
   */
  EditarId(id:string){
    this.Idseleccionado=id
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/listId",
      payload:{
        _id:id
      }
    }
  
    this.peticion.Get(post.Host+post.path).then(
      (res:any) => {
        console.log(res)
        this.id_ciudad=res.data[0].id_ciudad
        this.id_depto=res.data[0].id_depto
        this.id_usuarioCliente=res.data[0].id_usuarioCliente
        this.id_tratamiento=res.data[0].id_tratamiento
        this.fechayhora=res.data[0].fechayhora


        $('#modalnuevo').modal('show')
      }
    )
  }
  Eliminar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/delete",
      payload:{
        _id:this.Idseleccionado
      }
    }
  
    this.peticion.Delete(post.Host+post.path, post.payload).then(
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
  Actualizar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/update",
      payload:{
        id_ciudad:this.id_ciudad,
        id_depto:this.id_depto,
        id_usuarioCliente:this.id_usuarioCliente,
        id_tratamiento:this.id_tratamiento,
        fechayhora:this.fechayhora
      }
    }
  

    this.peticion.Put(post.Host+post.path, post.payload).then(
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
