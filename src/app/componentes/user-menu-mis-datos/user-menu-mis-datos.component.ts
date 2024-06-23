import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var $:any

@Component({
  selector: 'app-user-menu-mis-datos',
  templateUrl: './user-menu-mis-datos.component.html',
  styleUrls: ['./user-menu-mis-datos.component.css']
})
  export class UserMenuMisDatosComponent implements OnInit{
    ngOnInit(): void {
      this.CargarDatos()
    }
    constructor(private peticion:PeticionService){}
    usuario:string = ""
    clave:string = ""
    nombre:string = ""
    apellidos:string = ""
    cedula:string = ""
    correo: string = ""
    telefono: any = 3205555555
    rol: string = ""
    datos: any[] = []
    IdSeleccionado:string = ""

    CargarDatos(){
      let get = {
        Host:this.peticion.urlHost,
        path:"/usuarios/list",
        payload:{
          usuario:this.usuario
        }
      }
      this.peticion.Get(get.Host+get.path).then(
        (respuesta:any)=>{
          console.log(respuesta)
          this.datos = respuesta.data
        }
      )


    }
    AbrirModal(){
      this.usuario = ""
      this.clave = ""
      this.nombre = ""
      this.apellidos = ""
      this.cedula = ""
      this.correo  = ""
      this.telefono = ""
      this.rol  = ""
      this.IdSeleccionado = ""
      $('#ModalDatos').modal('show')
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
          rol:this.rol
        }
      }
      this.peticion.Post(post.Host+post.path, post.payload).then(
        (respuesta:any)=>{
          console.log(respuesta)
          if (respuesta.state == true){
            $('#ModalDatos').modal('hide')
          }
          this.CargarDatos
        }
      )
    }
    EditarId(id:string){
      this.IdSeleccionado = id
      let post = {
        Host:this.peticion.urlHost,
        path:"/usuarios/listId",
        payload:{
          _id:id
        }
      }
      this.peticion.Post(post.Host+post.path, post.payload).then(
        (respuesta:any)=>{
          console.log(respuesta)

          this.usuario = respuesta.data[0].usuario
          this.clave = respuesta.data[0].clave
          this.nombre = respuesta.data[0].nombre
          this.apellidos = respuesta.data[0].apellidos
          this.cedula = respuesta.data[0].cedula
          this.correo  = respuesta.data[0].correo
          this.telefono = respuesta.data[0].telefono
          this.rol  = respuesta.data[0].rol
          $('#ModalDatos').modal('show')
        }
      )

    }
    Eliminar(){
      let post = {
        Host:this.peticion.urlHost,
        path:"/usuarios/delete",
        payload:{
          _id:this.IdSeleccionado
        }
      }
      this.peticion.Post(post.Host+post.path, post.payload).then(
        (respuesta:any)=>{
          console.log(respuesta)
          if (respuesta.state == true){
            $('#ModalDatos').modal('hide')
          }
          this.CargarDatos
        }
      )
    }
    Actualizar(){
      let post = {
        Host:this.peticion.urlHost,
        path:"/usuarios/update",
        payload:{
          _id:this.IdSeleccionado,
          usuario:this.usuario,
          clave:this.clave,
          nombre:this.nombre,
          apellidos:this.apellidos,
          cedula:this.cedula,
          correo:this.correo,
          telefono:this.telefono,
          rol:this.rol
        }
      }
      this.peticion.Post(post.Host+post.path, post.payload).then(
        (respuesta:any)=>{
          console.log(respuesta)
          if (respuesta.state == true){
            $('#ModalDatos').modal('hide')
          }
          this.CargarDatos
        }
      )
    }
  }


