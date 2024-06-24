import { Component, Host } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var Swal: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private peticion: PeticionService, private router:Router){}

usuario:string = ""
clave:string = ""

login(){

  let post = {
    Host:this.peticion.urlHost,
    path:"/usuarios/login",
    payload:{
      usuario:this.usuario,
      clave:this.clave
    }
  }

  this.peticion.Post(post.Host + post.path, post.payload).then((respuesta:any) =>{
    console.log(respuesta)
    if(respuesta.state == true){

      Swal.fire({
        title: "Bienvenido!",
        text: respuesta.mensaje,
        icon: "success"
      });

      this.router.navigate(["dashboard"])

    }
    else{

      Swal.fire({
        title: "Ouch!!",
        text: respuesta.mensaje,
        icon: "error"
      });

    }
  })
}



}
