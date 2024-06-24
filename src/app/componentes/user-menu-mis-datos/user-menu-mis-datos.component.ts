import { Component, Host, OnInit } from '@angular/core';
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
    correo:string = ""
    telefono:string = "3213213321"
    rol:string = "1"


    CargarDatos(){

      var get = {
        Host:this.peticion.urlHost,
        path:"/usuarios/list",
        payload:{

        }
      }

      this.peticion.Get(get.Host + get.path).then(
        (respuesta:any) => {
          console.log(respuesta)
        }
      )

    }

  }


