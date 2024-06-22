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

usuario:string = "stebanprueba@gmail.com"
clave:string = "123456"

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
        position: "top-end",
        icon: "success",
        title: "Bienvenido!",
        showConfirmButton: false,
        timer: 1500
      });

      this.router.navigate(["dashboard"])

    }
    else{

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ouch!!",
        showConfirmButton: false,
        timer: 1500
      });

    }
  })
}



}
