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
    this.CargarTodasusuarios()
  }

    constructor(private peticion:PeticionService){}
    usuario:String = ""
    clave:String = ""
    nombre:String = ""
    apellidos:String = ""
    cedula:String = ""
    correo:String = ""
    telefono:String = ""
    estado:Number = 1
    codigoact:String = ""
    rol:Number = 3
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

    this.peticion.Get(post.Host+post.path).then(
      (res:any) => {
        console.log(res)
        this.datos=res.data
      }

  )

  }

  AbrirModal(){
    this.usuario = ""
    this.clave = ""
    this.nombre = ""
    this.apellidos = ""
    this.cedula = ""
    this.correo = ""
    this.telefono = ""
    this.estado = 1
    this.codigoact = ""
    this.rol = 1
    this.Idseleccionado = ""
    $('#modalnuevo').modal('show')
  }
  Guardar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/save",
      payload:{
        usuario:this.usuario,
        clave:this.clave,
        nombre:this.nombre,
        apellidos:this.apellidos,
        cedula:this.cedula,
        correo:this.correo,
        telefono:this.telefono,
        estado:this.estado,
        codigoact:this.codigoact,
        rol:this.rol
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

    this.peticion.Get(post.Host+post.path).then(
      (res:any) => {
        console.log(res)
        if(res.data != undefined){
          this.usuario=res.data[0].usuario
          this.clave=res.data[0].clave
          this.nombre=res.data[0].nombre
          this.apellidos=res.data[0].apellidos
          this.cedula=res.data[0].cedula
          this.correo=res.data[0].correo
          this.telefono=res.data[0].telefono
          this.estado=res.data[0].estado
          this.codigoact=res.data[0].codigoact
          this.rol=res.data[0].rol
          $('#modalnuevo').modal('show')

        }    //<-----------podria servir en caso de un error de lectura



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
        usuario:this.usuario,
        clave:this.clave,
        nombre:this.nombre,
        apellidos:this.apellidos,
        cedula:this.cedula,
        correo:this.correo,
        telefono:this.telefono,
        estado:this.estado,
        codigoact:this.codigoact,
        rol:this.rol
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
