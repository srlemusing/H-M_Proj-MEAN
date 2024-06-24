import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-user-menu-mis-citas',
  templateUrl: './user-menu-mis-citas.component.html',
  styleUrls: ['./user-menu-mis-citas.component.css']
})
export class UserMenuMisCitasComponent implements OnInit{

  ngOnInit(): void {
    this.CargarCitas()
  }
  constructor(private peticion:PeticionService){}

  id_ciudad:string = ""
  id_depto:string = ""
  id_usuarioCliente:string = ""
  id_tratamiento:string = ""
  fechayhora:any = ""
  datos:any[] = []

  CargarCitas(){

    let get = {
      Host:this.peticion.urlHost,
      path:"/citas/list",
      payload:{

      }
    }

    this.peticion.Get(get.Host+get.path).then(
      (res) =>{
        console.log(res)
      }
    )

  }


}
