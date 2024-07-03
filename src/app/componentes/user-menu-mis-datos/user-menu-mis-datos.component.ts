import { HttpClient } from '@angular/common/http';
import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-user-menu-mis-datos',
  templateUrl: './user-menu-mis-datos.component.html',
  styleUrls: ['./user-menu-mis-datos.component.css']
})
  export class UserMenuMisDatosComponent implements OnInit{

    ngOnInit(): void {
      this.CargarDatos()
      this.cargarestado()
    }

    constructor(private peticion:PeticionService, private router:Router, private http:HttpClient){}

    _id:string = ""
    usuario:string = ""
    clave:string = ""
    clave1:string = ""
    clave2:string = ""
    nombre:string = ""
    apellidos:string = ""
    cedula:string = ""
    correo:string = ""
    telefono:string = ""
    direccion:string = ""
    imagen:any = ""
    rol:string = ""
    datos: [] = []


    cargarestado(){
      var post={
        Host:this.peticion.urlHost,
        path:"/usuarios/state",
        payload:{
        }
      }

      this.peticion.Post(post.Host+post.path,post.payload).then((res:any)=>{

        if(res.nombre==""||res.nombre==undefined){
          this.router.navigate(["/login"])
        }
        //this.nombre=res.nombre
        this.rol=res.rol
        this._id =res._id
      })
    }

    CargarDatos(){
      let get = {
        Host:this.peticion.urlHost,
        path:"/usuarios/listId",
        payload:{
          _id:this._id
        }
      }
      this.peticion.Post(get.Host + get.path, get.payload).then(
        (respuesta:any) => {
          console.log(respuesta)
          if(respuesta.data != undefined){
            this.usuario=respuesta.data[0].usuario
            this.clave=respuesta.data[0].clave
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

    EditarId(id:string){
      let post = {
        Host:this.peticion.urlHost,
        path:"/usuarios/listId",
        payload:{
          _id:id
        }
      }

      this.peticion.Post(post.Host+post.path, post.payload).then(
        (res:any) => {
          console.log(res)
          if(res.data != undefined){
            this.usuario=res.data[0].usuario
            this.clave=res.data[0].clave
            this.nombre=res.data[0].nombre
            this.apellidos=res.data[0].apellidos
            this.cedula=res.data[0].cedula
            this.correo=res.data[0].correo
            this.telefono=res.data[0].telefono
            this.rol=res.data[0].rol
            $('modal-user').modal('show')

          }    //<-----------podria servir en caso de un error de lectura
        }
      )
    }

    Actualizar(){ //Actualiza user
      let post = {
        Host:this.peticion.urlHost,
        path:"/usuarios/update",
        payload:{
          nombre:this.nombre,
          apellidos:this.apellidos,
          cedula:this.cedula,
          correo:this.correo,
          telefono:this.telefono,
        }
      }
      
      console.log(post)
      this.peticion.Put(post.Host+post.path, post.payload).then(
        (res:any) => {
          console.log(res)
          if(res.state==true){
            Swal.fire({
              icon: "success",
              title: "Que Bien!",
              text: res.mensaje,
            });
            this.CargarDatos()
            $('#modal-user').modal('hide');
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

    ActualizarClave(){ //Actualiza Clave

      if (this.clave1 != this.clave2 || this.clave1 == null || this.clave1 == "") {
        Swal.fire({
          icon: "error",
          title: "Ouch!",
          text: "Las clave no coinciden, por favor verifica!",
        });
      } else{
        let post = {
          Host:this.peticion.urlHost,
          path:"/usuarios/update",
          payload:{
            
            clave:this.clave1
          }
        }
        
        console.log(post)
        this.peticion.Put(post.Host+post.path, post.payload).then(
          (res:any) => {
            console.log(res)
            if(res.state==true){
              Swal.fire({
                icon: "success",
                title: "Que Bien!",
                text: res.mensaje,
              });
              this.CargarDatos()
              $('#modal-user').modal('hide');
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


    AbrirModal(){
      $('#modal-user').modal('show')
    }

    AbrirModalClave(){
      $('#modal-clave').modal('show')
    }


    selectFile:any = {
      name:""
    }
    avatarSeleccionado(event:any){
      this.selectFile = event.target.files[0]
      console.log(this.avatarSeleccionado.name)
    }

    Upload(){

      const formData = new FormData
      formData.append("image", this.selectFile, this.selectFile.name)

      var post = {
        host:this.peticion.urlHost,
        path:"/upload"
      }
      this.http.post(post.host + post.path, formData).subscribe((respuesta)=> {
        console.log(respuesta)
      }, (error)=>{
        console.log(error)
      })



    }


  }


