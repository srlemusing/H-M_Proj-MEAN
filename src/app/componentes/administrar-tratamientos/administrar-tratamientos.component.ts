
import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-administrar-tratamientos',
  templateUrl: './administrar-tratamientos.component.html',
  styleUrls: ['./administrar-tratamientos.component.css']
})
export class AdministrarTratamientosComponent implements OnInit{

    ngOnInit(): void {
    this.CargarTodasusuarios()
  }

    constructor(private peticion:PeticionService){}
    cod_prod:String = ""
    nombre:String = ""
    estado:Number = 1
    datos:any[]=[]
    datosusuarios:any[]=[]
    Idseleccionado:string=""

/**
 * funcion para cargar datos de las usuarios
 */
  CargarTodasusuarios(){

    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/list",
      payload:{
      }
    }
  
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        this.datosusuarios=res.data
      }
      
  )

  }

  AbrirModal(){
    this.cod_prod = ""
    this.nombre = ""
    this.estado = 1
    this.Idseleccionado = ""
    $('#modalnuevo').modal('show')
  }
  Guardar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/save",
      payload:{
        cod_prod:this.cod_prod,
        nombre:this.nombre,
        estado:this.estado,
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
          this.CargarTodasusuarios()
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
      path:"/usuarios/listId",
      payload:{
        _id:id
      }
    }
  
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        this.cod_prod=res.data[0].cod_prod
        this.nombre=res.data[0].nombre
        this.estado=res.data[0].estado
        $('#modalnuevo').modal('show')
      }
    )
  }
  Eliminar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/delete",
      payload:{
        _id:this.Idseleccionado
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
          this.CargarTodasusuarios()
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
      path:"/usuarios/update",
      payload:{
        cod_prod:this.cod_prod,
        nombre:this.nombre,
        estado:this.estado,
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
          this.CargarTodasusuarios()
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
