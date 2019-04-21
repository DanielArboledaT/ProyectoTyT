import { HistoricoAdminCliente } from 'src/app/common/clases/historicoAdminCliente';
export class Cliente {

    idCliente: number;
    idAdministrador: number;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    identificacion: number;
    direccion: string;
    nit: string;
    telefono: number;
    ciudad: string;
    departamento: string;
    estado: string;
    email: string;
    nombreNegocio: string;
    fechaIngreso: Date;
    historicoCliente: HistoricoAdminCliente;

}