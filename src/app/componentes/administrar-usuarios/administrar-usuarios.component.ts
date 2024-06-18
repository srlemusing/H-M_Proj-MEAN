import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-administrar-usuarios',
  templateUrl: './administrar-usuarios.component.html',
  styleUrls: ['./administrar-usuarios.component.css']
})
export class AdministrarUsuariosComponent implements OnInit{

    ngOnInit(): void {
    this.CargarTodas()
    this.CargarTodasusuarios()
  }

  constructor(private peticion:PeticionService){}

  cod_cat:string=""
  nombre:string=""
  estado:number=1
  color:string="#ebebeb"
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

  CargarTodas(){

    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/list",
      payload:{
      }
    }
  
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        this.datos=res.data
      }
      
  )

  }
  AbrirModal(){
    this.cod_cat = this.datosusuarios[0].cod_cat //"CATG" / "" / 
    this.nombre = ""
    this.estado = 1
    this.color = "#ebebeb"
    this.Idseleccionado = ""
    $('#modalnuevo').modal('show')
  }
  Guardar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/save",
      payload:{
        cod_cat:this.cod_cat,
        nombre:this.nombre,
        estado:this.estado,
        color:this.color
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
          this.CargarTodas()
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
        this.cod_cat=res.data[0].cod_cat
        this.nombre=res.data[0].nombre
        this.estado=res.data[0].estado
        this.color=res.data[0].color
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
          this.CargarTodas()
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
        _id:this.Idseleccionado,
        cod_cat:this.cod_cat,
        nombre:this.nombre,
        estado:this.estado,
        color:this.color
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
          this.CargarTodas()
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
