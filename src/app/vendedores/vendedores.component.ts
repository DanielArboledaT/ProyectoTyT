import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  cargandoVendedores: boolean;
  vendedores: Vendedores[];
  insertarVendedor: boolean;
  

  constructor(private vendedoresService: VendedoresService,
              private router : Router) {
    this.cargandoVendedores = true;
    this.insertarVendedor = false;
  }

  ngOnInit() {
    this.consultarVendedores();
  }

  consultarVendedores(){
    this.vendedoresService.consultarVendedores().subscribe(res => {
      this.vendedores = res;
      console.log(res);
    },
    err => console.log(err),
    () => {
      this.cargandoVendedores = false;
    })
  }

  verDetalle( vendedor: Vendedores ){

    this.vendedoresService.setDetalleVendedor(vendedor);
    this.router.navigate(['home/vendedores/detalle']);

  }

  InsertarVendedor(){

    this.router.navigate(['home/vendedores/insertar']);
  }

  cambiarEstado(vendedor: Vendedores){
    this.cargandoVendedores = true;
    this.vendedoresService.cambiarEstadoVendedor(vendedor).subscribe(res => {
      console.log("cambiar estado", res);
      this.consultarVendedores();
      this.cargandoVendedores = false;
    })

  }

}
