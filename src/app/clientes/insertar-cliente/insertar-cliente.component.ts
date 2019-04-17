import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/common/clases/clientes';
import { ClientesService } from 'src/app/common/services/clientes.service';
import { ModalConfirmacionService } from 'src/app/common/services/modal-confirmacion.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent implements OnInit {

  nuevoCliente: Cliente;
  detalleCliente: Cliente;
  guardadoCliente: boolean;

  constructor(private clienteService: ClientesService,
    private modalConfirmService: ModalConfirmacionService,
    private snackBar: MatSnackBar) { 

    this.nuevoCliente  = new Cliente();
    this.guardadoCliente = false;
    
  }


  ngOnInit() {

    this.detalleCliente = this.clienteService.getDetalleCliente();

    if(this.detalleCliente === undefined){
      this.nuevoCliente  = new Cliente();
    }else{
      this.nuevoCliente = this.detalleCliente;
    }

  }

  guardarCliente(){

    this.modalConfirmService.openConfirmDialog('¿Esta seguro que desea guardar estos datos?') 
      .afterClosed().subscribe(res => {

        if(res){
          this.guardadoCliente = true;

          //Es un cliente nuevo
          if(this.detalleCliente === undefined){
            this.clienteService.guardarNuevoCliente(this.nuevoCliente).subscribe(res => {
      
              console.log(res);
        
            },
            err => console.log(err),
            () => {
              this.guardadoCliente = false;
              this.snackBar.open('Cliente agregado exitosamente', 'Ok');
            });

          }else{

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
