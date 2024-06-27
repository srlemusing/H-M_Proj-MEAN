import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var $:any
declare var Swal:any

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ngOnInit(): void {

  }
    constructor(private peticion:PeticionService){}

    clave:String = ""
    nombre:String = ""
    correo:String = ""
    estado:Number = 0
    codigoact:String = ""
    rol:Number = 3
    // datos:any[]=[]
    // datosusuarios:any[]=[]
    // Idseleccionado:string=""

  Guardar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/save",
      payload:{
        usuario:this.correo,
        clave:this.clave,
        nombre:this.nombre,
        correo:this.correo,
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
