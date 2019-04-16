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
  guardadoCliente: boolean;

  constructor(private clienteService: ClientesService,
    private modalConfirmService: ModalConfirmacionService,
    private snackBar: MatSnackBar) { 

    this.nuevoCliente  = new Cliente();
    this.guardadoCliente = false;
    
  }


  ngOnInit() {
  }

  guardarCliente(){

    this.modalConfirmService.openConfirmDialog('¿Esta seguro que desea guardar estos datos?') 
      .afterClosed().subscribe(res => {

        if(res){
          this.guardadoCliente = true;
          this.clienteService.guardarNuevoCliente(this.nuevoCliente).subscribe(res => {
      
            console.log(res);
      
          },
          err => console.log(err),
          () => {
            this.guardadoCliente = false;
            this.snackBar.open('Cliente guardado exitosamente', 'Ok');
          })
        }

      });

    

  }

}
