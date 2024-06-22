import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var Swal:any

@Component({
  selector: 'app-menu-dashboard',
  templateUrl: './menu-dashboard.component.html',
  styleUrls: ['./menu-dashboard.component.css']
})

export class MenuDashboardComponent implements OnInit{

  constructor (private peticion:PeticionService, private router:Router){}

  ngOnInit(): void {
    this.cargarestado()
  }

  nombre:String = "Cargando..."
  rol:String = "Cargando..."

  cargarestado(){
    var post={
      Host:this.peticion.urlHost,
      path:"/usuarios/state",
      payload:{
      }
    }

    this.peticion.Post(post.Host+post.path,post.payload).then((res:any)=>{
      console.log(res)
      if(res.nombre==""||res.nombre==undefined){
        //this.router.navigate(["/login"])
      }
      this.nombre=res.nombre
      this.rol=res.rol
    })
  }

  CerrarSession(){
    var post={
      Host:this.peticion.urlHost,
      path:"/usuarios/logout",
      payload:{
      }
    }

    this.peticion.Post(post.Host+post.path,post.payload).then((res:any)=>{
      console.log(res)
      Swal.fire({
        title:"Nos vemos pronto!",
        text:res.mensaje,
        icon:"success"
      });
        this.router.navigate(["/login"])
    })
  }

}
