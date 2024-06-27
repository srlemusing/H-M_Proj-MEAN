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
    this.cargarDatos()
    this.cargarestado()
    this.cargarTratamientos()
    this.cargarCiudades()
    this.cargarDeptos()
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

    fecha: string = '';  // Variable para almacenar la fecha seleccionada
    hora: string = ''; 

    imagen:any = ""
    rol:string = ""
    datos: [] = []
    Idseleccionado:string = ""
    tratamientos: any[] = [];
    tratamiento: string=''
    ciudades: any[] = [];
    ciudad: any=''
    departamentos: any[] = [];
    departamento: any = {}

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
        this.nombre=res.nombre
        this.rol=res.rol
        this._id =res._id
      })
    }

    cargarDatos(){
      let get = {
        Host:this.peticion.urlHost,
        path:"/usuarios/listId",
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

    cargarTratamientos(){
      let get = {
        Host:this.peticion.urlHost,
        path:"/tratamientos/list",
        payload:{
        }
      }
      this.peticion.Get(get.Host + get.path).then(
        (respuesta:any) => {
          this.tratamientos = respuesta.data
          
        }
      )
    }

    cargarCiudades(){
      let get = {
        Host:this.peticion.urlHost,
        path:"/ciudades/list",
        payload:{
        }
      }
      this.peticion.Get(get.Host + get.path).then(
        (respuesta:any) => {
          console.log(this.departamento)
          if (this.departamento) {
            this.ciudades = respuesta.data.filter((ciudad: any) => ciudad.codigo_depto === this.departamento.codigo);
          } else {
            this.ciudades = [];
          }

        }
      )
    }

    cargarDeptos(){
      let get = {
        Host:this.peticion.urlHost,
        path:"/departamentos/list",
        payload:{
        }
      }
      this.peticion.Get(get.Host + get.path).then(
        (respuesta:any) => {
          this.departamentos = respuesta.data

        }
      )
    }

    obtenerFechaHoraCombinada() {
      if (this.fecha && this.hora) {
        const fechaHoraCombinada = `${this.fecha} ${this.hora}:00`;
        console.log(fechaHoraCombinada);
        return fechaHoraCombinada;
      } else {
        return '';
      }
    }


    Guardar(){
      let fechayhora = this.obtenerFechaHoraCombinada();
      let post = {
        Host:this.peticion.urlHost,
        path:"/citas/save",
        payload:{
          id_ciudad:this.ciudad._id,
          id_depto:this.departamento._id,
          id_usuarioCliente:this._id,
          id_tratamiento:this.tratamiento,
          fechayhora : fechayhora
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
            this.cargarDatos()
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
