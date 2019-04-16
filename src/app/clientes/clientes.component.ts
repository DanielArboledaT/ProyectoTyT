import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/common/services/clientes.service';
import { MatTableDataSource } from '@angular/material';

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

  constructor(private route: Router, private clienteService: ClientesService) { 
    
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

  getTotalCost() {

    return this.listaClientes.map(v => v.valor).reduce( (acc, valor) => acc + parseInt(valor), 0);

  }

  clickInsertarCliente(){

    this.route.navigate(['/home/clientes/insertar'])

  }

  applyFilter(filterValue: string) {

    this.listaClientes.filter = filterValue.trim().toLowerCase();

  }

  cambiarEstadoCliente(cliente){

    this.cargandoCambiarEstado = true;
    this.clienteService.cambiarEstadoCliente(cliente).subscribe(res => {

      console.log(res);

    },
    err => console.log(err),
    () => {
      this.cargandoCambiarEstado = false;
      this.consultarClientes();
    })

  }

}
