import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

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
    telefono: number = 3205555555
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






  }


