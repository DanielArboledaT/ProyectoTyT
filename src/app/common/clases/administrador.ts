import { ImgPerfil } from 'src/app/common/clases/img-perfil';
export class Administrador{

    idAdministrador: number;
    idImgPerfil: number;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    identificacion: number;
    direccion: string;
    telefono: number;
    ciudad: string;
    departamento: string;
    fechaIngreso: Date;
    estado: string;
    email: string;
    password: string;
    imgPerfil: ImgPerfil;
    dueño: boolean;

}