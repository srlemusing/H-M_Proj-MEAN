import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

declare var $:any
declare var Swal:any

@Component({
  selector: 'app-administrar-citas',
  templateUrl: './administrar-citas.component.html',
  styleUrls: ['./administrar-citas.component.css']
})
export class AdministrarCitasComponent implements OnInit{

    ngOnInit(): void {
    this.CargarTodascitas()
    this.cargarTratamientos()
    this.cargarCiudades()
    this.cargarDeptos()
  }

    constructor(private peticion:PeticionService){}
    _id:string = ""
    id_ciudad:any[]=[]
    id_depto:any[]=[]
    id_usuarioCliente:any[]=[]
    id_tratamiento:any[]=[]
    fecha:String = ""
    hora:String = ""
    fechayhora:String=""
    datos:any[]=[]
    datoscitas:any[]=[]
    Idseleccionado:string=""
    estado:Number=1

    tratamientos: any[] = [];
    tratamiento: string=''
    ciudades: any[] = [];
    ciudad: any=''
    departamentos: any[] = [];
    departamento: any = {}
    usuarios: any[]=[]

/**
 * funcion para cargar datos de las citas
 */

  CargarTodascitas(){

    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/list",
      payload:{
      }
    }

    this.peticion.Get(post.Host+post.path).then(
      (res:any) => {
        console.log(res)
        this.datos=res.data
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

  cargarUsuarios(){
    let get = {
      Host:this.peticion.urlHost,
      path:"/usuarios/list",
      payload:{
      }
    }
    this.peticion.Get(get.Host + get.path).then(
      (respuesta:any) => {
        this.usuarios = respuesta.data

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

  AbrirModal(){

    this.id_ciudad = []
    this.id_depto = []
    this.id_usuarioCliente = []
    this.id_tratamiento = []
    this.fechayhora = ""
    $('#modalnuevo').modal('show')
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
        id_tratamiento:this.tratamiento
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
          this.CargarTodascitas()
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
  /**
   * funcion para cargar un solo registro
   * @param id este es el identificador del producto
   */
  EditarId(id:string){
    this.Idseleccionado=id
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/listId",
      payload:{
        _id:id
      }
    }

    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        if(res.data != undefined){
          this.id_ciudad=res.data[0].id_ciudad
          this.id_depto=res.data[0].id_depto
          this.id_usuarioCliente=res.data[0].id_usuarioCliente
          this.id_tratamiento=res.data[0].id_tratamiento
          this.fechayhora=res.data[0].fechayhora
          $('#modalnuevo').modal('show')
        }      //<-----------podria servir en caso de un error de lectura



      }
    )
  }
  Eliminar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/delete",
      payload:{
        _id:this.Idseleccionado
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
          this.CargarTodascitas()
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
  Actualizar(){
    let post = {
      Host:this.peticion.urlHost,
      path:"/citas/update",
      payload:{
        _id:this.Idseleccionado,
        id_ciudad:this.id_ciudad,
        id_depto:this.id_depto,
        id_usuarioCliente:this.id_usuarioCliente,
        id_tratamiento:this.id_tratamiento,
        fechayhora:this.fechayhora
      }
    }


    this.peticion.Put(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        if(res.state==true){

          Swal.fire({
            icon: "success",
            title: "Que Bien!",
            text: res.mensaje,
          });

          $('#modalnuevo').modal('hide')
          this.CargarTodascitas()
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
