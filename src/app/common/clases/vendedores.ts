import { ImgPerfil } from 'src/app/common/clases/img-perfil';
import { HistoricoAdminVendedor } from 'src/app/common/clases/historiciAdminVendedor';
export class Vendedores{
    
    idVendedor: number;
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
    imgPerfil: ImgPerfil;
    historicoVendedor: HistoricoAdminVendedor;
}
