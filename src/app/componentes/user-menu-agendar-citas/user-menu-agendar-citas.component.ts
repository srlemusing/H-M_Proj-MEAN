import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any


@Component({
  selector: 'app-user-menu-agendar-citas',
  templateUrl: './user-menu-agendar-citas.component.html',
  styleUrls: ['./user-menu-agendar-citas.component.css']
})
export class UserMenuAgendarCitasComponent implements OnInit{

  ngOnInit(): void {
    this.CargarDatos()
    this.cargarestado()
  }

  constructor(private peticion:PeticionService, private router:Router){}

    _id:string = ""
    //usuario:string = ""
    //clave:string = ""
    nombre:string = ""
    apellidos:string = ""
    cedula:string = ""
    correo:string = ""
    telefono:string = ""
    direccion:string = ""
    id_ciudad:string =""
    id_depto:string =""
    id_usuarioCliente:string =""
    id_tratamiento:string =""
    imagen:any = ""
    rol:string = ""
    datos: [] = []
    Idseleccionado:string = ""


    cargarestado(){
      var post={
        Host:this.peticion.urlHost,
        path:"/usuarios/state",
        payload:{
        }
      }

      this.peticion.Post(post.Host+post.path,post.payload).then((res:any)=>{
        console.log("lo que sea",res)
        if(res.nombre==""||res.nombre==undefined){
          this.router.navigate(["/login"])
        }
        this.nombre=res.nombre
        this.rol=res.rol
        this._id =res._id
      })
    }

    CargarDatos(){
      let get = {
        Host:this.peticion.urlHost,
        path:"/citas/listId",
        payload:{
          _id:this._id
        }
      }
      this.peticion.Get(get.Host + get.path).then(
        (respuesta:any) => {
          console.log(respuesta)
          if(respuesta.data != undefined){
            //this.usuario=respuesta.data[0].usuario
            //this.clave=respuesta.data[0].clave
            this.nombre=respuesta.data[0].nombre
            this.apellidos=respuesta.data[0].apellidos
            this.cedula=respuesta.data[0].cedula
            this.correo=respuesta.data[0].correo
            this.telefono=respuesta.data[0].telefono
            this.rol=respuesta.data[0].rol
          }
        }
      )
    }


    Guardar(){
      let post = {
        Host:this.peticion.urlHost,
        path:"/citas/save",
        payload:{
          id_ciudad:this.id_ciudad,
          id_depto:this.id_depto,
          id_usuarioCliente:this.id_usuarioCliente,
          id_tratamiento:this.id_tratamiento
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


            $('#modalnuevo').modal('hide')
            this.CargarDatos()
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
