export interface Cita {
    id_ciudad: string;
    id_depto: string;
    id_usuarioCliente: string;
    id_tratamiento: string;
    fechayhora: string;
  }

  export interface ResponsePost {
    state: string;
    mensaje: string;
    data?: Cita; 
  }

  export interface CitaRes {
    _id: string;
    id_ciudad: {
      _id: string;
      nombre: string;
      activo: boolean;
      codigo: string;
      codigo_depto: string;
      __v: number;
    };
    id_depto: {
      _id: string;
      nombre: string;
      activo: boolean;
      codigo: string;
      __v: number;
    };
    id_usuarioCliente: {
      _id: string;
      usuario: string;
      clave: string;
      nombre: string;
      apellidos: string;
      cedula: string;
      correo: string;
      telefono: string;
      estado: number;
      codigoact: string;
      rol: number;
      __v: number;
    };
    id_tratamiento: {
      _id: string;
      codigo: string;
      nombre: string;
      descripcion: string;
      precio: number;
      estado: number;
      __v: number;
    };
    fechayhora: string;
    estado: number;
    __v: number;
  }
  
  export interface RespuestaCitas {
    state: boolean;
    data: CitaRes[];
  }