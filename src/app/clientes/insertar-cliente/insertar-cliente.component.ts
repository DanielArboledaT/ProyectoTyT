import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/common/clases/clientes';
import { ClientesService } from 'src/app/common/services/clientes.service';
import { ModalConfirmacionService } from 'src/app/common/services/modal-confirmacion.service';
import { MatSnackBar } from '@angular/material';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { HistoricoAdminCliente } from 'src/app/common/clases/historicoAdminCliente';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent implements OnInit {

  nuevoCliente: Cliente;
  detalleCliente: Cliente;
  guardadoCliente: boolean;

  //Variable que verifica si se necesita campo comentario o no
  esEditar: boolean;

  //Variable para el comentario que se guardara en el historico
  comentario: string;

  constructor(private clienteService: ClientesService,
    private modalConfirmService: ModalConfirmacionService,
    private snackBar: MatSnackBar,
    private adminService: AdministradorService) { 

    this.nuevoCliente  = new Cliente();
    this.guardadoCliente = false;
    this.esEditar = false;
    
  }


  ngOnInit() {

    this.detalleCliente = this.clienteService.getDetalleCliente();
    this.clienteService.setDetalleCliente(undefined);

    if(this.detalleCliente === undefined){
      this.esEditar = false;
      this.nuevoCliente  = new Cliente();
      this.nuevoCliente.historicoCliente = new HistoricoAdminCliente();
    }else{
      this.esEditar = true;
      this.nuevoCliente = this.detalleCliente;
      this.nuevoCliente.historicoCliente = new HistoricoAdminCliente();
    }

  }

  guardarCliente(){

    this.modalConfirmService.openConfirmDialog('¿Esta seguro que desea guardar estos datos?') 
      .afterClosed().subscribe(res => {

        if(res){
          this.guardadoCliente = true;

          //Es un cliente nuevo
          if(this.detalleCliente === undefined){
            this.nuevoCliente.fechaIngreso = new Date();
            this.nuevoCliente.idAdministrador = this.adminService.getAdministrador().idAdministrador;
            console.log("Nuevo cliente", this.nuevoCliente);
            this.clienteService.guardarNuevoCliente(this.nuevoCliente).subscribe(res => {
      
              console.log(res);
        
            },
            err => console.log(err),
            () => {
              this.guardadoCliente = false;
              this.snackBar.open('Cliente agregado exitosamente', 'Ok');
            });

          }else{

            this.nuevoCliente.historicoCliente.fechaMovimiento = new Date();
            this.nuevoCliente.historicoCliente.movimiento = "Actualizar";
            this.nuevoCliente.historicoCliente.idCliente = this.detalleCliente.idCliente;
            this.nuevoCliente.historicoCliente.idAdministrador = this.adminService.getAdministrador().idAdministrador;
            this.nuevoCliente.historicoCliente.cambioRealizado = this.comentario;
            console.log("nuevoVendedor",this.nuevoCliente);
            this.clienteService.actualizarCliente(this.nuevoCliente).subscribe(res => {

              console.log(res)

            },
            err => console.log(err),
            () => {
              this.guardadoCliente = false;
              this.snackBar.open('Cliente actualizado exitosamente', 'Ok');
            });

          }
          
        }

      });

  }



}
