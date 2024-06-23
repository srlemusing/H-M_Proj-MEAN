
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
    this.CargarTodastratamientos()
  }

    constructor(private peticion:PeticionService){}
    codigo:String = ""
    nombre:String = ""
    _id:String = ""
    descripcion:String = ""
    precio:Number = 0
    datos:any[]=[]
    datostratamientos:any[]=[]
    Idseleccionado:string=""

/**
 * funcion para cargar datos de las tratamientos
 */
  CargarTodastratamientos(){

    let post = {
      Host:this.peticion.urlHost,
      path:"/tratamientos/list",
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
    this.codigo = ""
    this.nombre = ""
    // this.estado = 1
    this.Idseleccionado = ""
    $('#modalnuevo').modal('show')
  }
  Guardar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/tratamientos/save",
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio,
        // estado:this.estado,
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
          this.CargarTodastratamientos()
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
      path:"/tratamientos/listId",
      payload:{
        _id:id
      }
    }
  
    this.peticion.Get(post.Host+post.path).then(
      (res:any) => {
        console.log(res)
        this.codigo=res.data[0].codigo
        this.nombre=res.data[0].nombre
        this.descripcion=res.data[0].descripcion
        this.precio=res.data[0].precio
        this._id=res.data[0]._id
        // this.estado=res.data[0].estado
        $('#modalnuevo').modal('show')
      }
    )
  }
  Eliminar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/tratamientos/delete",
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
          this.CargarTodastratamientos()
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
      path:"/tratamientos/update",
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio,
        // estado:this.estado,
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
          this.CargarTodastratamientos()
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
