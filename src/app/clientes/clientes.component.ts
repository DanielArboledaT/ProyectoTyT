import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/common/services/clientes.service';
import { MatTableDataSource } from '@angular/material';
import { ModalConfirmacionService } from 'src/app/common/services/modal-confirmacion.service';
import { MatSnackBar } from '@angular/material';
import { Cliente } from '../common/clases/clientes';
import { HistoricoAdminCliente } from '../common/clases/historicoAdminCliente';
import { AdministradorService } from 'src/app/common/services/administrador.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes;
  columnsListaClientes: string[] = [ 
    'primerNombre', 
    'segundoNombre',
    'primerApellido', 
    'segundoApellido', 
    'identificacion',
    'nombreNegocio',
    'direccion',
    'nit',
    'telefono',
    'ciudad',
    'departamento',
    'email',
    'Acciones'
  ];
  cargandoClientes: boolean;
  cargandoCambiarEstado: boolean;

  constructor(private route: Router, 
    private clienteService: ClientesService,
    private modalConfirmService: ModalConfirmacionService,
    private snackBar: MatSnackBar,
    private adminService: AdministradorService) { 
    
    this.cargandoCambiarEstado = false;

  }

  ngOnInit() {

    this.consultarClientes();

  }

  consultarClientes(){

    this.cargandoClientes = true;
    this.clienteService.consultarCliente().subscribe(res => {

      console.log(res);
      this.listaClientes = new MatTableDataSource(res);

    },
    err => console.log(err),
    () => {
      this.cargandoClientes = false;
    })

  }

  clickInsertarCliente(){

    this.route.navigate(['/home/clientes/insertar'])

  }

  applyFilter(filterValue: string) {

    this.listaClientes.filter = filterValue.trim().toLowerCase();

  }

  cambiarEstadoCliente(cliente: Cliente){

    cliente.historicoCliente = new HistoricoAdminCliente();
    let mensaje;
    if(cliente.estado === 'I'){
      mensaje = '¿Esta seguro que desea activar el estado del vendedor?';
    }else{
      mensaje = '¿Esta seguro que desea inactivar el estado del vendedor?';
    }

    this.modalConfirmService.openConfirmDialog(mensaje,true) 
      .afterClosed().subscribe(res => {
        
        if(res){
          cliente.historicoCliente.cambioRealizado = this.clienteService.getComentario();
          cliente.historicoCliente.fechaMovimiento = new Date();
          cliente.historicoCliente.idAdministrador = this.adminService.getAdministrador().idAdministrador;
          cliente.historicoCliente.idCliente = cliente.idCliente;
          if(cliente.estado === 'I'){
            cliente.historicoCliente.movimiento = "Activar";
          }else{
            cliente.historicoCliente.movimiento = "Desactivar";
          }
          this.cargandoCambiarEstado = true;
          this.clienteService.cambiarEstadoCliente(cliente).subscribe(res => {
      
            console.log(res);
      
          },
          err => console.log(err),
          () => {
            this.cargandoCambiarEstado = false;
            this.consultarClientes();
            this.snackBar.open('Accion realizada exitosamente', 'Ok');
          })
        }

      });

  }

  clickEditarCliente(cliente: Cliente){

    this.clienteService.setDetalleCliente(cliente);
    this.route.navigate(['/home/clientes/insertar']);

  }

}
