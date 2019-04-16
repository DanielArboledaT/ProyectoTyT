import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/common/clases/clientes';
import { ClientesService } from 'src/app/common/services/clientes.service';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent implements OnInit {

  nuevoCliente: Cliente;
  guardadoCliente: boolean;

  constructor(private clienteService: ClientesService) { 

    this.nuevoCliente  = new Cliente();
    this.guardadoCliente = false;
    
  }


  ngOnInit() {
  }

  guardarCliente(){
    this.guardadoCliente = true;
    this.clienteService.guardarNuevoCliente(this.nuevoCliente).subscribe(res => {

      console.log(res);

    },
    err => console.log(err),
    () => {
      this.guardadoCliente = false;
    })

  }

}
