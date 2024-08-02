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
    cedula:String = ""
    nombre:String = ""
    correo:String = ""
    estado:Number = 0
    codigoact:String = ""
    rol:Number = 3
    // datos:any[]=[]
    // datosusuarios:any[]=[]
    // Idseleccionado:string=""

  Guardar(){

    this.cedula = this.cedula.replace(/[^0-9]/g, "");

  if (this.cedula.length < 8 || this.cedula.length > 15) {
    Swal.fire({
      icon: "warning",
      title: "¡Atención!",
      text: "La cédula debe tener entre 8 y 15 caracteres y contener solo números.",
    });
    return; // Detiene la ejecución si no cumple con las condiciones
  }
    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/save",
      payload:{
        usuario:this.correo,
        clave:this.clave,
        nombre:this.nombre,
        cedula:this.cedula,
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
          }).then(() => {window.location.href = "http://0.0.0.0:4200/login"
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
