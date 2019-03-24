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

  constructor(private vendedoresService: VendedoresService,
              private router : Router) {
    this.cargandoVendedores = true;
  }

  ngOnInit() {
    this.vendedoresService.consultarVendedores().subscribe(res => {
      this.vendedores = res;
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
    console.log("Puto");
  }

}
