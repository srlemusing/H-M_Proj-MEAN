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
          this.CargarDatos
        }
      )


    }


  }


